/**
 * Gestionnaire de Panier Centralisé - KATE'S PASTRY
 * Synchronise l'état du panier et les données utilisateur entre toutes les pages
 * Préserve les données pendant le processus de commande
 */

class CartManager {
    constructor() {
        this.cart = this.loadCart();
        this.userData = this.loadUserData();
        this.orderData = this.loadOrderData();
        this.init();
    }

    init() {
        // Écouter les changements de page
        this.setupPageChangeListener();
        
        // Synchroniser l'affichage du panier
        this.updateCartDisplay();
        
        // Sauvegarder automatiquement les données
        this.setupAutoSave();
        
        console.log('CartManager initialisé avec succès');
    }

    // ===== GESTION DU PANIER =====
    
    addToCart(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image,
                category: product.category
            });
        }
        
        this.saveCart();
        // Mettre à jour l'affichage complet
        this.updateCartDisplay();
        // Mettre à jour spécifiquement l'affichage des articles
        this.updateCartItemsDisplay();
        // Mettre à jour le récapitulatif
        this.updateOrderSummary();
        this.showNotification(`${product.name} ajouté au panier`);
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        // Mettre à jour l'affichage complet
        this.updateCartDisplay();
        // Mettre à jour spécifiquement l'affichage des articles
        this.updateCartItemsDisplay();
        // Mettre à jour le récapitulatif
        this.updateOrderSummary();
        this.showNotification('Article supprimé du panier');
    }

    updateQuantity(productId, newQuantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = newQuantity;
                this.saveCart();
                // Mettre à jour l'affichage complet
                this.updateCartDisplay();
                // Mettre à jour spécifiquement l'affichage des articles
                this.updateCartItemsDisplay();
                // Mettre à jour le récapitulatif
                this.updateOrderSummary();
            }
        }
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getCartCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        // Mettre à jour l'affichage complet
        this.updateCartDisplay();
        // Mettre à jour spécifiquement l'affichage des articles
        this.updateCartItemsDisplay();
        // Mettre à jour le récapitulatif
        this.updateOrderSummary();
    }

    // ===== GESTION DES DONNÉES UTILISATEUR =====
    
    saveUserData(data) {
        this.userData = { ...this.userData, ...data };
        this.saveToStorage('userData', this.userData);
    }

    getUserData() {
        return this.userData;
    }

    // ===== GESTION DES DONNÉES DE COMMANDE =====
    
    saveOrderData(data) {
        this.orderData = { ...this.orderData, ...data };
        this.saveToStorage('orderData', this.orderData);
    }

    getOrderData() {
        return this.orderData;
    }

    // ===== PERSISTANCE DES DONNÉES =====
    
    saveCart() {
        this.saveToStorage('cart', this.cart);
    }

    loadCart() {
        return this.loadFromStorage('cart') || [];
    }

    loadUserData() {
        return this.loadFromStorage('userData') || {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            district: '',
            city: 'Lomé',
            postalCode: '',
            instructions: '',
            isGift: false,
            giftMessage: ''
        };
    }

    loadOrderData() {
        return this.loadFromStorage('orderData') || {
            deliveryMethod: 'gozem',
            paymentMethod: 'mobile-money',
            promoCode: '',
            deliveryCost: 1500
        };
    }

    saveToStorage(key, data) {
        try {
            localStorage.setItem(`kate_pastry_${key}`, JSON.stringify(data));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde:', error);
        }
    }

    loadFromStorage(key) {
        try {
            const data = localStorage.getItem(`kate_pastry_${key}`);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Erreur lors du chargement:', error);
            return null;
        }
    }

    // ===== SYNCHRONISATION DE L'AFFICHAGE =====
    
    updateCartDisplay() {
        // Mettre à jour tous les compteurs de panier
        const cartCounts = document.querySelectorAll('[id*="cart-count"], [id*="mobile-cart-count"], [id*="sidebar-cart-count"]');
        const cartTotal = this.getCartTotal();
        const cartCount = this.getCartCount();

        cartCounts.forEach(element => {
            element.textContent = cartCount;
        });

        // Mettre à jour les totaux
        const totalElements = document.querySelectorAll('[id*="total"], [id*="mini-cart-total"]');
        totalElements.forEach(element => {
            if (element.id.includes('total')) {
                element.textContent = this.formatPrice(cartTotal);
            }
        });

        // Mettre à jour le mini-panier
        this.updateMiniCart();
        
        // Mettre à jour le récapitulatif de commande
        this.updateOrderSummary();
        
        // Mettre à jour l'affichage des articles du panier sur la page de commande
        this.updateCartItemsDisplay();
    }

    updateMiniCart() {
        const miniCartItems = document.getElementById('mini-cart-items');
        if (miniCartItems) {
            miniCartItems.innerHTML = '';
            
            this.cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'flex items-center justify-between text-sm';
                itemElement.innerHTML = `
                    <span class="font-body text-text-primary">${item.name} x${item.quantity}</span>
                    <span class="font-cta font-medium text-primary">${this.formatPrice(item.price * item.quantity)}</span>
                `;
                miniCartItems.appendChild(itemElement);
            });
        }
    }

    updateOrderSummary() {
        const subtotalElement = document.getElementById('subtotal');
        if (subtotalElement) {
            subtotalElement.textContent = this.formatPrice(this.getCartTotal());
        }

        const totalElement = document.getElementById('total');
        if (totalElement) {
            const subtotal = this.getCartTotal();
            const deliveryCost = this.orderData.deliveryCost || 1500;
            const tax = Math.round((subtotal + deliveryCost) * 0.18);
            const total = subtotal + deliveryCost + tax;
            totalElement.textContent = this.formatPrice(total);
        }
        
        // Mettre à jour la TVA
        const taxElement = document.getElementById('tax');
        if (taxElement) {
            const subtotal = this.getCartTotal();
            const deliveryCost = this.orderData.deliveryCost || 1500;
            const tax = Math.round((subtotal + deliveryCost) * 0.18);
            taxElement.textContent = this.formatPrice(tax);
        }
    }

    updateCartItemsDisplay() {
        const cartContainer = document.getElementById('cart-items-container');
        const emptyMessage = document.getElementById('empty-cart-message');
        
        if (!cartContainer) return;
        
        if (this.cart.length === 0) {
            // Afficher le message de panier vide
            if (emptyMessage) {
                emptyMessage.classList.remove('hidden');
            }
            cartContainer.innerHTML = '';
            return;
        }
        
        // Masquer le message de panier vide
        if (emptyMessage) {
            emptyMessage.classList.add('hidden');
        }
        
        // Vider le conteneur
        cartContainer.innerHTML = '';
        
        // Afficher chaque article
        this.cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'flex items-center space-x-4 pb-6 border-b border-border mb-6';
            itemElement.innerHTML = `
                <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
                </div>
                <div class="flex-grow">
                    <h3 class="font-cta font-medium text-primary mb-1">${item.name}</h3>
                    <p class="font-cta font-medium text-accent">${this.formatPrice(item.price)}</p>
                </div>
                <div class="flex items-center space-x-3">
                    <button class="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-smooth" onclick="cartManager.updateQuantity('${item.id}', ${item.quantity - 1})">
                        <svg class="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                        </svg>
                    </button>
                    <span class="font-cta font-medium text-primary w-8 text-center">${item.quantity}</span>
                    <button class="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-smooth" onclick="cartManager.updateQuantity('${item.id}', ${item.quantity + 1})">
                        <svg class="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                        </svg>
                    </button>
                </div>
                <div class="text-right">
                    <p class="font-cta font-medium text-primary">${this.formatPrice(item.price * item.quantity)}</p>
                    <button class="text-error hover:text-error-600 transition-smooth mt-1" onclick="cartManager.removeFromCart('${item.id}')">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0.5 0.5 23 23">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    </button>
                </div>
            `;
            cartContainer.appendChild(itemElement);
        });
    }

    // ===== GESTION DES CHANGEMENTS DE PAGE =====
    
    setupPageChangeListener() {
        // Sauvegarder les données avant de changer de page
        window.addEventListener('beforeunload', () => {
            this.saveCart();
            this.saveUserData(this.userData);
            this.saveOrderData(this.orderData);
        });

        // Restaurer les données lors du chargement de la page
        window.addEventListener('load', () => {
            this.restorePageData();
        });
    }

    restorePageData() {
        // Restaurer les données du formulaire de commande
        this.restoreCheckoutForm();
        
        // Restaurer les données du panier
        this.restoreCartDisplay();
        
        // Mettre à jour l'affichage
        this.updateCartDisplay();
    }

    restoreCheckoutForm() {
        const form = document.getElementById('checkout-form');
        if (form) {
            Object.keys(this.userData).forEach(key => {
                const input = form.querySelector(`[name="${key}"]`);
                if (input && this.userData[key]) {
                    input.value = this.userData[key];
                }
            });

            // Restaurer les options de livraison et paiement
            if (this.orderData.deliveryMethod) {
                const deliveryRadio = document.querySelector(`input[name="delivery"][value="${this.orderData.deliveryMethod}"]`);
                if (deliveryRadio) deliveryRadio.checked = true;
            }

            if (this.orderData.paymentMethod) {
                const paymentRadio = document.querySelector(`input[name="payment"][value="${this.orderData.paymentMethod}"]`);
                if (paymentRadio) paymentRadio.checked = true;
            }
        }
    }

    restoreCartDisplay() {
        // Restaurer l'affichage des articles du panier
        const cartContainer = document.querySelector('.cart-items-container');
        if (cartContainer) {
            this.cart.forEach(item => {
                this.displayCartItem(item, cartContainer);
            });
        }
    }

    displayCartItem(item, container) {
        const itemElement = document.createElement('div');
        itemElement.className = 'flex items-center space-x-4 pb-6 border-b border-border mb-6';
        itemElement.innerHTML = `
            <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
            </div>
            <div class="flex-grow">
                <h3 class="font-cta font-medium text-primary mb-1">${item.name}</h3>
                <p class="font-cta font-medium text-accent">${this.formatPrice(item.price)}</p>
            </div>
            <div class="flex items-center space-x-3">
                <button class="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-smooth" onclick="cartManager.updateQuantity('${item.id}', ${item.quantity - 1})">
                    <svg class="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                    </svg>
                </button>
                <span class="font-cta font-medium text-primary w-8 text-center">${item.quantity}</span>
                <button class="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-smooth" onclick="cartManager.updateQuantity('${item.id}', ${item.quantity + 1})">
                    <svg class="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                </button>
            </div>
            <div class="text-right">
                <p class="font-cta font-medium text-primary">${this.formatPrice(item.price * item.quantity)}</p>
                <button class="text-error hover:text-error-600 transition-smooth mt-1" onclick="cartManager.removeFromCart('${item.id}')">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                </button>
            </div>
        `;
        container.appendChild(itemElement);
    }

    // ===== SAUVEGARDE AUTOMATIQUE =====
    
    setupAutoSave() {
        // Sauvegarder automatiquement les données du formulaire
        const form = document.getElementById('checkout-form');
        if (form) {
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('input', () => {
                    this.autoSaveFormData();
                });
                input.addEventListener('change', () => {
                    this.autoSaveFormData();
                });
            });
        }

        // Sauvegarder automatiquement les options de livraison et paiement
        const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
        deliveryOptions.forEach(option => {
            option.addEventListener('change', () => {
                this.orderData.deliveryMethod = option.value;
                this.saveOrderData(this.orderData);
                this.updateDeliveryInfo(option.value);
            });
        });

        const paymentOptions = document.querySelectorAll('input[name="payment"]');
        paymentOptions.forEach(option => {
            option.addEventListener('change', () => {
                this.orderData.paymentMethod = option.value;
                this.saveOrderData(this.orderData);
            });
        });
    }

    autoSaveFormData() {
        const form = document.getElementById('checkout-form');
        if (form) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            this.saveUserData(data);
        }
    }

    // ===== GESTION DE LA LIVRAISON =====
    
    updateDeliveryInfo(deliveryType) {
        const deliveryCost = document.getElementById('delivery-cost');
        const deliveryTime = document.getElementById('delivery-time');
        const total = document.getElementById('total');
        
        let cost = 0;
        let time = '';
        
        switch(deliveryType) {
            case 'gozem':
                cost = 1500;
                time = '30-45 minutes avec Gozem Express';
                break;
            case 'bkg':
                cost = 1200;
                time = '45-60 minutes avec Bkg Standard';
                break;
            case 'ole':
                cost = 800;
                time = '60-90 minutes avec Olé Économique';
                break;
            case 'pickup':
                cost = 0;
                time = 'Prêt en 15-20 minutes pour retrait';
                break;
        }
        
        this.orderData.deliveryCost = cost;
        this.saveOrderData(this.orderData);
        
        if (deliveryCost) deliveryCost.textContent = cost === 0 ? 'Gratuit' : this.formatPrice(cost);
        if (deliveryTime) deliveryTime.textContent = time;
        
        // Mettre à jour le total
        if (total) {
            const subtotal = this.getCartTotal();
            const tax = Math.round((subtotal + cost) * 0.18);
            const newTotal = subtotal + cost + tax;
            total.textContent = this.formatPrice(newTotal);
        }
        
        // Mettre à jour le récapitulatif complet
        this.updateOrderSummary();
    }

    // ===== UTILITAIRES =====
    
    formatPrice(price) {
        return price.toLocaleString('fr-FR') + ' FCFA';
    }

    showNotification(message) {
        // Créer une notification temporaire
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-accent text-white px-6 py-3 rounded-lg shadow-large z-50 transform translate-x-full transition-transform duration-300';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animer l'entrée
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Supprimer après 3 secondes
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // ===== VALIDATION ET SOUMISSION =====
    
    validateOrder() {
        const form = document.getElementById('checkout-form');
        if (!form) return false;
        
        if (!form.checkValidity()) {
            form.reportValidity();
            return false;
        }
        
        if (this.cart.length === 0) {
            this.showNotification('Votre panier est vide');
            return false;
        }
        
        return true;
    }

    submitOrder() {
        if (!this.validateOrder()) {
            return false;
        }
        
        // Sauvegarder toutes les données
        this.autoSaveFormData();
        
        // Créer l'objet de commande
        const order = {
            id: this.generateOrderId(),
            timestamp: new Date().toISOString(),
            cart: this.cart,
            userData: this.userData,
            orderData: this.orderData,
            total: this.getCartTotal() + this.orderData.deliveryCost + Math.round((this.getCartTotal() + this.orderData.deliveryCost) * 0.18)
        };
        
        // Sauvegarder la commande
        this.saveToStorage('currentOrder', order);
        
        // Vider le panier
        this.clearCart();
        
        // Rediriger vers la page de confirmation
        window.location.href = 'order_confirmation.html';
        
        return true;
    }

    generateOrderId() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        return `VN-${year}-${month}-${day}-${random}`;
    }

    // ===== RÉCUPÉRATION DES DONNÉES DE COMMANDE =====
    
    getCurrentOrder() {
        return this.loadFromStorage('currentOrder');
    }

    // ===== MIGRATION DES DONNÉES EXISTANTES =====
    
    migrateExistingData() {
        // Migrer les données du panier existant si nécessaire
        const existingCart = this.loadFromStorage('cart') || [];
        if (existingCart.length > 0 && this.cart.length === 0) {
            this.cart = existingCart;
            this.saveCart();
        }
        
        // Migrer les données utilisateur existantes
        const existingUserData = this.loadFromStorage('userData') || {};
        if (Object.keys(existingUserData).length > 0) {
            this.userData = { ...this.userData, ...existingUserData };
            this.saveUserData(this.userData);
        }
    }
}

// Initialiser le gestionnaire de panier global
const cartManager = new CartManager();

// Exposer les fonctions principales globalement pour la compatibilité
window.addToCart = (product) => cartManager.addToCart(product);
window.removeFromCart = (productId) => cartManager.removeFromCart(productId);
window.updateQuantity = (productId, quantity) => cartManager.updateQuantity(productId, quantity);
window.placeOrder = () => cartManager.submitOrder();
window.updateDeliveryInfo = (deliveryType) => cartManager.updateDeliveryInfo(deliveryType);

// Fonctions utilitaires globales
window.formatPrice = (price) => cartManager.formatPrice(price);
window.getCartCount = () => cartManager.getCartCount();
window.getCartTotal = () => cartManager.getCartTotal();

console.log('CartManager chargé et initialisé');

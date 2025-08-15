/**
 * Configuration Centralisée - KATE'S PASTRY
 * Paramètres globaux de l'application
 */

const AppConfig = {
    // Informations de l'entreprise
    company: {
        name: "KATE'S PASTRY",
        tagline: "Tradition & Excellence",
        address: "123 Avenue de la Paix, Lomé",
        phone: "+228 91 23 47 97",
        email: "katebertrya@gmail.com",
        website: "https://katespastry.com"
    },

    // Configuration des prix et taxes
    pricing: {
        currency: "FCFA",
        taxRate: 0.18, // 18% de TVA
        currencyFormat: {
            locale: "fr-FR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }
    },

    // Options de livraison
    delivery: {
        options: [
            {
                id: "gozem",
                name: "Gozem Express",
                cost: 1500,
                time: "30-45 minutes",
                description: "Livraison rapide et fiable",
                available: true
            },
            {
                id: "bkg",
                name: "Bkg Standard",
                cost: 1200,
                time: "45-60 minutes",
                description: "Livraison standard économique",
                available: true
            },
            {
                id: "ole",
                name: "Olé Économique",
                cost: 800,
                time: "60-90 minutes",
                description: "Option la plus économique",
                available: true
            },
            {
                id: "pickup",
                name: "Retrait en Boutique",
                cost: 0,
                time: "15-20 minutes",
                description: "Gratuit, prêt rapidement",
                available: true
            }
        ],
        defaultOption: "gozem"
    },

    // Options de paiement
    payment: {
        methods: [
            {
                id: "mobile-money",
                name: "Mobile Money",
                description: "Orange Money, Wave, etc.",
                available: true,
                secure: true
            },
            {
                id: "card",
                name: "Carte Bancaire",
                description: "Visa, Mastercard",
                available: true,
                secure: true
            },
            {
                id: "cash",
                name: "Paiement à la Livraison",
                description: "Espèces",
                available: true,
                secure: false
            }
        ],
        defaultMethod: "mobile-money"
    },

    // Configuration des notifications
    notifications: {
        autoSave: true,
        showSuccess: true,
        showErrors: true,
        timeout: 3000
    },

    // Configuration du panier
    cart: {
        maxItems: 50,
        autoSave: true,
        localStorageKey: "kate_pastry_cart",
        userDataKey: "kate_pastry_userData",
        orderDataKey: "kate_pastry_orderData"
    },

    // Configuration des images
    images: {
        fallbackImage: "https://images.unsplash.com/photo-1555507036-ab794f4ade2a?q=80&w=2940&auto=format&fit=crop",
        lazyLoading: true,
        errorHandling: true
    },

    // Configuration des animations
    animations: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out"
    },

    // Configuration de la navigation
    navigation: {
        smoothScrolling: true,
        mobileBreakpoint: 768,
        stickyHeader: true
    },

    // Configuration des formulaires
    forms: {
        autoSave: true,
        validation: true,
        showProgress: true
    },

    // Configuration des erreurs
    errorHandling: {
        showUserFriendly: true,
        logToConsole: true,
        fallbackMessages: {
            network: "Erreur de connexion. Veuillez réessayer.",
            validation: "Veuillez vérifier les informations saisies.",
            general: "Une erreur s'est créatione. Veuillez réessayer."
        }
    },

    // Configuration des performances
    performance: {
        debounceDelay: 300,
        throttleDelay: 100,
        maxRetries: 3
    },

    // Configuration de la sécurité
    security: {
        csrfProtection: true,
        xssProtection: true,
        secureHeaders: true
    },

    // Configuration de l'accessibilité
    accessibility: {
        keyboardNavigation: true,
        screenReaderSupport: true,
        highContrast: false,
        fontSizeAdjustment: true
    },

    // Configuration de l'internationalisation
    i18n: {
        defaultLocale: "fr",
        supportedLocales: ["fr", "en"],
        fallbackLocale: "fr",
        dateFormat: "DD/MM/YYYY",
        timeFormat: "HH:mm"
    },

    // Configuration des réseaux sociaux
    social: {
        facebook: "https://facebook.com/katespastry",
        twitter: "https://twitter.com/katespastry",
        instagram: "https://instagram.com/katespastry",
        pinterest: "https://pinterest.com/katespastry"
    },

    // Configuration des partenaires
    partners: {
        delivery: ["Gozem", "Bkg", "Olé"],
        payment: ["Orange Money", "Wave", "Visa", "Mastercard"]
    },

    // Configuration des horaires
    businessHours: {
        monday: { open: "06:00", close: "19:00" },
        tuesday: { open: "06:00", close: "19:00" },
        wednesday: { open: "06:00", close: "19:00" },
        thursday: { open: "06:00", close: "19:00" },
        friday: { open: "06:00", close: "19:00" },
        saturday: { open: "06:00", close: "18:00" },
        sunday: { open: "07:00", close: "16:00" }
    },

    // Configuration des promotions
    promotions: {
        welcomeDiscount: 0.10, // 10% de réduction
        loyaltyProgram: true,
        referralBonus: 0.05, // 5% de bonus par parrainage
        seasonalOffers: true
    },

    // Configuration de la qualité
    quality: {
        guarantee: "Satisfaction garantie ou remboursé",
        freshness: "Préparé le jour même",
        ingredients: "Ingrédients frais et locaux",
        certification: "HACCP, Bio"
    },

    // Configuration de la livraison
    deliveryConfig: {
        minOrderAmount: 2000, // 2000 FCFA minimum
        freeDeliveryThreshold: 10000, // Livraison gratuite à partir de 10000 FCFA
        maxDeliveryDistance: 25, // 25 km maximum
        preparationTime: 15, // 15 minutes de préparation
        trackingEnabled: true
    },

    // Configuration des catégories de créations
    productCategories: [
        {
            id: "croissants",
            name: "Croissants",
            description: "Croissants traditionnels français",
            image: "croissants.jpg",
            featured: true
        },
        {
            id: "pains-chocolat",
            name: "Pains au Chocolat",
            description: "Pains au chocolat artisanaux",
            image: "pains-chocolat.jpg",
            featured: true
        },
        {
            id: "brioches",
            name: "Brioches",
            description: "Brioches moelleuses et dorées",
            image: "brioches.jpg",
            featured: true
        },
        {
            id: "saisonnier",
            name: "Créations Saisonnières",
            description: "Spécialités selon les saisons",
            image: "saisonnier.jpg",
            featured: false
        }
    ],

    // Configuration des filtres de créations
    productFilters: {
        priceRange: {
            min: 1500,
            max: 8500,
            step: 500
        },
        dietaryOptions: [
            "bio",
            "beurre-francais",
            "sans-gluten",
            "vegan"
        ],
        allergens: [
            "gluten",
            "lactose",
            "œufs",
            "noix",
            "soja"
        ]
    },

    // Configuration des avis et évaluations
    reviews: {
        enabled: true,
        moderation: true,
        minLength: 10,
        maxLength: 500,
        ratingSystem: "5 étoiles"
    },

    // Configuration de la newsletter
    newsletter: {
        enabled: true,
        doubleOptIn: true,
        frequency: "weekly",
        categories: ["promotions", "nouveautés", "recettes", "événements"]
    },

    // Configuration du support client
    customerSupport: {
        phone: "+228 91 23 47 97",
        email: "support@katespastry.com",
        chat: true,
        responseTime: "2 heures",
        languages: ["français", "anglais"]
    },

    // Configuration de la maintenance
    maintenance: {
        enabled: false,
        message: "Site en maintenance. Nous serons de retour bientôt !",
        estimatedTime: "30 minutes"
    }
};

// Exposer la configuration globalement
window.AppConfig = AppConfig;

// Fonctions utilitaires basées sur la configuration
const AppUtils = {
    // Formater un prix selon la configuration
    formatPrice: function(price) {
        return price.toLocaleString(
            AppConfig.pricing.currencyFormat.locale,
            AppConfig.pricing.currencyFormat
        ) + ' ' + AppConfig.pricing.currency;
    },

    // Obtenir une option de livraison par ID
    getDeliveryOption: function(id) {
        return AppConfig.delivery.options.find(option => option.id === id);
    },

    // Obtenir une méthode de paiement par ID
    getPaymentMethod: function(id) {
        return AppConfig.payment.methods.find(method => method.id === id);
    },

    // Vérifier si une option est disponible
    isAvailable: function(type, id) {
        if (type === 'delivery') {
            const option = this.getDeliveryOption(id);
            return option && option.available;
        } else if (type === 'payment') {
            const method = this.getPaymentMethod(id);
            return method && method.available;
        }
        return false;
    },

    // Calculer la TVA
    calculateTax: function(amount) {
        return Math.round(amount * AppConfig.pricing.taxRate);
    },

    // Calculer le total avec livraison et taxes
    calculateTotal: function(subtotal, deliveryCost) {
        const tax = this.calculateTax(subtotal + deliveryCost);
        return subtotal + deliveryCost + tax;
    },

    // Vérifier si la livraison est gratuite
    isFreeDelivery: function(amount) {
        return amount >= AppConfig.deliveryConfig.freeDeliveryThreshold;
    },

    // Obtenir le temps de préparation
    getPreparationTime: function() {
        return AppConfig.deliveryConfig.preparationTime;
    },

    // Vérifier les horaires d'ouverture
    isOpen: function() {
        const now = new Date();
        const day = now.toLocaleDateString('en-US', { weekday: 'lowercase' });
        const time = now.toLocaleTimeString('en-US', { hour12: false });
        
        const hours = AppConfig.businessHours[day];
        if (!hours) return false;
        
        return time >= hours.open && time <= hours.close;
    },

    // Obtenir le prochain créneau d'ouverture
    getNextOpeningTime: function() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const day = tomorrow.toLocaleDateString('en-US', { weekday: 'lowercase' });
        const hours = AppConfig.businessHours[day];
        
        if (hours) {
            return `${hours.open} demain`;
        }
        
        return "Fermé demain";
    },

    // Valider un numéro de téléphone togolais
    validatePhone: function(phone) {
        const phoneRegex = /^(\+228|228)?[0-9]{8}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    },

    // Valider une adresse email
    validateEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Générer un ID de commande unique
    generateOrderId: function() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        return `VN-${year}-${month}-${day}-${random}`;
    },

    // Débouncer une fonction
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttler une fonction
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Gérer les erreurs de manière centralisée
    handleError: function(error, context = 'general') {
        console.error(`Erreur dans ${context}:`, error);
        
        const message = AppConfig.errorHandling.fallbackMessages[context] || 
                       AppConfig.errorHandling.fallbackMessages.general;
        
        if (AppConfig.errorHandling.showUserFriendly) {
            // Afficher un message d'erreur convivial à l'utilisateur
            this.showNotification(message, 'error');
        }
    },

    // Afficher une notification
    showNotification: function(message, type = 'info') {
        if (!AppConfig.notifications.showSuccess && type === 'success') return;
        if (!AppConfig.notifications.showErrors && type === 'error') return;
        
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-large z-50 transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-success text-white' :
            type === 'error' ? 'bg-error text-white' :
            type === 'warning' ? 'bg-warning text-white' :
            'bg-accent text-white'
        }`;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animer l'entrée
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Supprimer après le délai configuré
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, AppConfig.notifications.timeout);
    }
};

// Exposer les utilitaires globalement
window.AppUtils = AppUtils;

console.log('Configuration de l\'application chargée');

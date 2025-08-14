/**
 * Configuration des Chemins - KATE'S PASTRY
 * S'adapte automatiquement à l'environnement (local vs Firebase)
 */

// Détecter l'environnement
const isLocalhost = window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1' ||
                   window.location.hostname.includes('192.168.') ||
                   window.location.hostname.includes('10.0.');

// Configuration des chemins selon l'environnement
const PathConfig = {
    // Chemins CSS
    css: {
        main: isLocalhost ? '../css/main.css' : '/css/main.css',
        tailwind: isLocalhost ? '../css/tailwind.css' : '/css/tailwind.css'
    },
    
    // Chemins JavaScript
    js: {
        appConfig: isLocalhost ? '../public/app-config.js' : '/public/app-config.js',
        cartManager: isLocalhost ? '../public/cart-manager.js' : '/public/cart-manager.js',
        dhwsDataInjector: isLocalhost ? '../public/dhws-data-injector.js' : '/public/dhws-data-injector.js'
    },
    
    // Chemins des pages
    pages: {
        homepage: isLocalhost ? 'homepage.html' : '/pages/homepage.html',
        productCatalog: isLocalhost ? 'product_catalog.html' : '/pages/product_catalog.html',
        shoppingCart: isLocalhost ? 'shopping_cart_checkout.html' : '/pages/shopping_cart_checkout.html',
        contact: isLocalhost ? 'contact_location.html' : '/pages/contact_location.html',
        orderConfirmation: isLocalhost ? 'order_confirmation.html' : '/pages/order_confirmation.html'
    },
    
    // Chemins des images
    images: {
        base: isLocalhost ? '../images/' : '/images/'
    }
};

// Fonction pour charger dynamiquement le CSS
function loadCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = PathConfig.css.main;
    link.onerror = function() {
        console.warn('CSS principal non trouvé, tentative avec chemin alternatif...');
        // Fallback vers le chemin absolu si le relatif échoue
        link.href = '/css/main.css';
    };
    document.head.appendChild(link);
}

// Fonction pour charger dynamiquement les scripts
function loadScripts() {
    const scripts = [
        PathConfig.js.appConfig,
        PathConfig.js.cartManager,
        PathConfig.js.dhwsDataInjector
    ];
    
    scripts.forEach((src, index) => {
        const script = document.createElement('script');
        script.src = src;
        script.onerror = function() {
            console.warn(`Script ${src} non trouvé, tentative avec chemin alternatif...`);
            // Fallback vers le chemin absolu
            const fallbackSrc = src.replace('../public/', '/public/');
            script.src = fallbackSrc;
        };
        document.head.appendChild(script);
    });
}

// Fonction pour obtenir le bon chemin selon l'environnement
function getPath(type, name) {
    return PathConfig[type][name];
}

// Fonction pour naviguer vers une page
function navigateTo(page) {
    const path = PathConfig.pages[page];
    if (path) {
        window.location.href = path;
    } else {
        console.error(`Page ${page} non trouvée dans la configuration`);
    }
}

// Exposer les fonctions globalement
window.PathConfig = PathConfig;
window.loadCSS = loadCSS;
window.loadScripts = loadScripts;
window.getPath = getPath;
window.navigateTo = navigateTo;

// Log de l'environnement détecté
console.log(`🌍 Environnement détecté: ${isLocalhost ? 'Local' : 'Production/Firebase'}`);
console.log('📁 Configuration des chemins:', PathConfig);

// Chargement automatique si appelé directement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        loadCSS();
        loadScripts();
    });
} else {
    loadCSS();
    loadScripts();
}

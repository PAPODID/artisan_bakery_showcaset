# 🥖 KATE'S PASTRY - Artisan Bakery Showcase

A modern, responsive web application showcasing an artisan French bakery with an elegant design and seamless user experience. Built with HTML5, CSS3, and JavaScript, featuring a beautiful loading screen and comprehensive e-commerce functionality.

## 🚀 Features

- **🎨 Elegant Design** - Modern, responsive design with beautiful gradients and animations
- **🛒 E-commerce Ready** - Complete shopping cart and checkout system
- **📱 Mobile-First** - Fully responsive design optimized for all devices
- **⚡ Fast Loading** - Optimized images and efficient code structure
- **🎭 Interactive Elements** - Smooth animations and user interactions
- **🌍 Multi-language Support** - French and English content
- **📸 Image Gallery** - Beautiful product showcase with carousel functionality

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs directly in the browser
- Optional: Local development server for testing

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PAPODID/artisan_bakery_showcaset.git
   cd artisan_bakery_showcaset
   ```

2. **Open the project:**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the application:**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or open `index.html` directly in your browser

## 📁 Project Structure

```
artisan_bakery_showcaset/
├── index.html                    # Main entry point with loading screen
├── css/
│   └── main.css                  # Main stylesheet
├── pages/                        # Application pages
│   ├── homepage.html             # Main homepage with hero section
│   ├── product_catalog.html      # Product showcase and catalog
│   ├── product_detail_page.html  # Individual product details
│   ├── shopping_cart_checkout.html # Shopping cart and checkout
│   ├── order_receipt.html        # Order confirmation and receipt
│   └── contact_location.html     # Contact information and location
├── public/                       # Static assets and scripts
│   ├── photos/                   # Product and gallery images
│   │   ├── h.webp
│   │   └── pp.jpg
│   ├── app-config.js             # Application configuration
│   ├── cart-manager.js           # Shopping cart functionality
│   ├── dhws-data-injector.js     # Data injection utilities
│   └── path-config.js            # Path configuration
└── package-lock.json             # Dependencies lock file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Warm browns and creams (#8B4513, #D2691E)
- **Accent**: Golden highlights for premium feel
- **Background**: Gradient backgrounds for visual appeal

### Typography
- **Headlines**: Bold, elegant fonts for brand identity
- **Body Text**: Clean, readable fonts for content
- **Accent Text**: Stylized fonts for special elements

### Animations
- **Loading Screen**: Smooth fade-in with spinning animation
- **Page Transitions**: Elegant transitions between pages
- **Interactive Elements**: Hover effects and smooth transitions

## 🛒 E-commerce Features

### Shopping Cart
- **Add to Cart**: Seamless product addition
- **Cart Management**: Update quantities and remove items
- **Cart Persistence**: Items saved across sessions

### Checkout Process
- **Order Summary**: Clear display of selected items
- **Payment Integration**: Ready for payment gateway integration
- **Order Confirmation**: Professional order completion
- **Delivery Date Validation**: Mandatory 24-hour minimum delivery time
- **Form Validation**: Complete validation of all required fields
- **Multiple Delivery Options**: Gozem Express, Bkg Standard, Olé Économique, Pickup
- **Multiple Payment Methods**: Mobile Money, Card Payment, Cash on Delivery

### Order Management
- **Order Receipt**: Complete order confirmation with all details
- **Print Functionality**: Professional receipt printing
- **PDF Download**: Receipt download capability
- **Order Tracking**: Order number generation and tracking

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile**: Optimized for smartphones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured experience (1024px+)
- **Large Screens**: Optimized for large displays (1280px+)

## 🎯 Key Pages

### 1. Loading Screen (`index.html`)
- Beautiful animated loading experience
- Automatic redirect to homepage after 2 seconds
- Brand introduction with bakery logo

### 2. Homepage (`pages/homepage.html`)
- Hero section with image carousel
- Featured products showcase
- About section highlighting artisan quality
- Call-to-action buttons

### 3. Product Catalog (`pages/product_catalog.html`)
- Comprehensive product listing
- Filtering and search capabilities
- Product categories and descriptions
- Add to cart functionality

### 4. Product Details (`pages/product_detail_page.html`)
- Detailed product information
- High-quality product images
- Pricing and availability
- Related products suggestions

### 5. Shopping Cart & Checkout (`pages/shopping_cart_checkout.html`)
- Cart management interface
- Order summary and totals
- Complete checkout form with validation
- Multiple delivery options (Gozem, Bkg, Olé, Pickup)
- Multiple payment methods (Mobile Money, Card, Cash)
- **Mandatory delivery date selection (24h minimum)**
- Gift message functionality
- Special delivery instructions

### 6. Order Receipt (`pages/order_receipt.html`)
- **Complete order confirmation page**
- **Customer information display**
- **Order details with delivery date**
- **Product list with quantities and prices**
- **Order summary with taxes and totals**
- **Print and download functionality**
- **Professional receipt layout**

### 7. Contact & Location (`pages/contact_location.html`)
- Contact information
- Location details and map
- Business hours
- Contact form

## 🔧 Customization

### Styling
- Modify `css/main.css` for design changes
- Update color schemes in CSS variables
- Customize animations and transitions

### Content
- Edit HTML files to update text content
- Replace images in `public/photos/` directory
- Update product information in JavaScript files

### Functionality
- Modify `public/cart-manager.js` for cart behavior
- Update `public/app-config.js` for app settings
- Customize `public/path-config.js` for routing

## 🚀 Deployment

### Static Hosting
This project can be deployed on any static hosting service:

- **GitHub Pages**: Push to repository and enable Pages
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI to deploy

### Local Development
For local development with live reload:

```bash
# Using Live Server (VS Code extension)
# Install Live Server extension and right-click index.html

# Using Python
python -m http.server 8000

# Using Node.js
npx serve . --live
```

## 📸 Screenshots

The application features:
- Beautiful loading screen with bakery branding
- Responsive navigation with mobile menu
- Product showcase with high-quality images
- Shopping cart with real-time updates
- Contact page with location information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Design Inspiration**: French artisan bakery aesthetics
- **Icons**: Custom SVG icons for bakery theme
- **Images**: High-quality product photography
- **Fonts**: Modern typography for premium feel

---

**Built with ❤️ for the love of artisan baking**

*Experience the taste of tradition with KATE'S PASTRY*

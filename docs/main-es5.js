(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/carousel/carousel.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/carousel/carousel.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" style=\"margin-top: 10px\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"img-fluid\" src=\"../../../assets/images/lenguajes-html5.jpg\" min-height=\"800\" class=\"d-block w-100\"\n        alt=\"...\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h1>Lenguajes de Programación</h1>\n        <p>El equippo de trabajo domina varios lenguajes de programación para brindarte la mejor solucion en la aplicación.</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"img-fluid\" src=\"../../../assets/images/fotis-fotopoulos.jpg\" min-height=\"800\" class=\"d-block w-100\"\n        alt=\"...\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h1>Tiempo y Calidad</h1>\n        <p>Estamos comprometidos con nuestros clientes a brindarte el servicio de desarrollo en el menor tiemppo posible y con la mejor calidad del mercado.</p>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"img-fluid\" src=\"../../../assets/images/choisir-vps-3.jpg\" min-height=\"800\" class=\"d-block w-100\"\n        alt=\"...\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h1>Equipos de Alta Tecnologia</h1>\n        <p>Equipos de alta calidad y tecnologia para brindarte asi la seguridad que necesitas en tu aplicación.</p>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contact-form/contact-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contact-form/contact-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addressForm\" novalidate (ngSubmit)=\"onSubmit()\">\n  <mat-card class=\"shipping-card\">\n    <!-- <mat-card-header>\n        <h4 class=\"highlight\" style=\"color: gray !important\">Información para Contactarlo</h4>\n      </mat-card-header> -->\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>Nombre</mat-label>\n            <input matInput placeholder=\"Nombre\" formControlName=\"firstName\">\n            <mat-error *ngIf=\"summited && addressForm.controls['firstName'].hasError('required')\">\n              El Nombre es <strong>Requerido</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>Apellido</mat-label>\n            <input matInput placeholder=\"Apellido\" formControlName=\"lastName\">\n            <mat-error *ngIf=\"summited && addressForm.controls['lastName'].hasError('required')\">\n              El Apellido es <strong>Requerido</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input matInput placeholder=\"Email\" formControlName=\"email\" autocomplete=\"off\">\n            <mat-error *ngIf=\"summited && addressForm.controls['email'].hasError('required')\">\n              El Email es <strong>Requerido</strong>\n            </mat-error>\n            <mat-error *ngIf=\"addressForm.controls['email'].hasError('email')\">\n              El Email no es <strong>Valido</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>Asunto</mat-label>\n            <input matInput placeholder=\"Asunto\" formControlName=\"asunto\" autocomplete=\"off\" />\n            <mat-error *ngIf=\"summited && addressForm.controls['asunto'].hasError('required')\">\n              El Asunto es <strong>Requerido</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>Mensaje</mat-label>\n            <textarea rows=\"3\" style=\"resize: none\" matInput placeholder=\"Mensaje\" formControlName=\"address\"></textarea>\n            <mat-error *ngIf=\"summited && addressForm.controls['address'].hasError('required')\">\n              Mensaje es <strong>Requerido</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>Celular</mat-label>\n            <input matInput placeholder=\"Celular\" formControlName=\"celular\">\n          </mat-form-field>\n          <div *ngFor=\"let validation of validation_messages.telefono\">\n            <mat-error\n              *ngIf=\"summited && addressForm.get('celular').hasError(validation.type) && (addressForm.get('celular').dirty || addressForm.get('celular').touched)\">\n              {{ validation.message }}\n            </mat-error>\n          </div>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\n            <mat-label>Teléfono</mat-label>\n            <input matInput placeholder=\"Teléfono\" formControlName=\"telefono\">\n          </mat-form-field>\n          <div *ngFor=\"let validation of validation_messages.telefono\">\n            <mat-error\n              *ngIf=\"summited && addressForm.get('telefono').hasError(validation.type) && (addressForm.get('telefono').dirty || addressForm.get('telefono').touched)\">\n              {{ validation.message }}\n            </mat-error>\n          </div>\n        </div>\n      </div>\n    </mat-card-content>\n    <mat-card-actions class=\"text-center\">\n      <button mat-flat-button color=\"primary\" style=\"width: 100px !important\" type=\"submit\">\n        <i class=\"fas fa-check\"></i> Enviar\n      </button>\n    </mat-card-actions>\n  </mat-card>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/footer/footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/footer/footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <ul class=\"navbar-nav d-flex-row\">\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Empresa</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Servicios</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Proyectos</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Contacto</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row mt-5\">\n    <div class=\"copyright col-md-8 text-center\">\n      <p>\n        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n        <strong>Copyright &copy;</strong>\n        <script>\n          document.write(new Date().getFullYear());\n        </script> Todos los derechos reservados. Elaborado por InnovacionesJD C.A\n        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n      </p>\n    </div>\n    <div class=\"ftco-footer-widget col-md-4\">\n      <ul class=\"ftco-footer-social list-unstyled float-md-left float-lft\">\n        <li class=\"ftco-animate\"><a class=\"twitter\" href=\"#\"><span class=\"icon-twitter\"></span></a></li>\n        <li class=\"ftco-animate\"><a class=\"facebook\" href=\"#\"><span class=\"icon-facebook\"></span></a></li>\n        <li class=\"ftco-animate\"><a class=\"instagram\" href=\"#\"><span class=\"icon-instagram\"></span></a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/navbar/navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/pages/index']\" [routerLinkActive]=\"['active']\"> <img\r\n      src=\"../../../assets/images/JD_Designs_Logo_F_Outline.png\" alt=\"Image\" width=\"60px\" height=\"40px\"\r\n      class=\"img-fluid\">\r\n    InnovacionesJD\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['/pages/index']\" class=\"nav-link text-left\">Inicio</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['/pages/about']\" class=\"nav-link text-left\">Quienes Somos?</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a href=\"javascript:;\" class=\"dropdown-toggle text-left\" id=\"menuServices\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Servicios</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"menuServices\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/pages/services/web']\">Paginas Web</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/pages/services/hosting']\">Alojamiento Web</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/pages/services/extras']\">Servicios Adicionales</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['/pages/projects']\" class=\"nav-link text-left\">Proyectos</a>\r\n      </li>\r\n      <!-- <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['/pages/blog']\" class=\"nav-link text-left\">Blog</a>\r\n      </li> -->\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['/pages/contacto']\" class=\"nav-link text-left\">Contacto</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/messages/messages.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/messages/messages.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- BEGIN MESSAGES PANEL-->\n <div class=\"theme-config\">\n   <div class=\"theme-config-toggle\" (click)=\"openedMessages()\"><i class=\"fal fa-envelope fa-spin theme-config-show\"></i>\n      <i class=\"far fa-angle-double-right theme-config-close\"></i>\n    </div>\n   <div class=\"theme-config-box\">\n    <app-contact-form></app-contact-form>\n   </div>\n </div>\n <!-- END MESSAGES PANEL-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pagos/pagos.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pagos/pagos.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" data-aos=\"zoom-in\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h5>Pagos Nacionales.</h5>\n      <p class=\"text-underline\">Transferencias y Depositos a nivel Nacional.</p>\n      <img class=\"img-fluid\" src=\"../../../assets/images/mercantil.png\" width=\"200px\" height=\"100px\" alt=\"\">\n      <img class=\"img-fluid\" src=\"../../../assets/images/banesco.jpg\" width=\"200px\" height=\"100px\" alt=\"\">\n      <img class=\"img-fluid\" src=\"../../../assets/images/bancaribe.jpg\" width=\"200px\" height=\"100px\" alt=\"\">\n      <img class=\"img-fluid\" src=\"../../../assets/images/provincial.jpg\" width=\"200px\" height=\"100px\" alt=\"\">\n      <img class=\"img-fluid\" src=\"../../../assets/images/bdv2.png\" width=\"200px\" height=\"100px\" alt=\"\">\n    </div>\n    <div class=\"col-md-6\">\n      <h5>Pagos Internacionales.</h5>\n      <p class=\"text-underline\">Transferencias y Depositos a nivel Nacional.</p>\n      <img class=\"img-fluid\" src=\"../../../assets/images/paypal.png\" width=\"220px\" height=\"100px\" alt=\"\">\n      <img class=\"img-fluid\" src=\"../../../assets/images/Logo-Western-Union.jpg\" width=\"220px\" height=\"100px\" alt=\"\">\n      <br/>\n      <h6 style=\"font-weight: 500\">Nota:</h6>\n      <p style=\"font-size: 13px\">Tasa sujeta a cambios de acuerdo al precio actual de la moneda con la que desea cancelar.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about/about.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about/about.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section mt-5\" data-aos=\"zoom-in\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\" style=\"padding-right: 0 !important\">\n        <img src=\"../../../assets/images/logo-Innovaciones-about.jpg\" width=\"300px\" height=\"250px\" alt=\"\">\n      </div>\n      <div class=\"col-md-8\" style=\"padding-top: 1em\">\n        <div class=\"row\">\n          <h1 class=\"section-subtitle\">InnovacionesJD</h1>\n          <p>\n            InnovacionesJD es el resultado de quienes, como tú, buscan potenciar su empresa u organización a\n            fin de acceder a los beneficios que el mundo digital trae consigo.\n          </p>\n        </div>\n        <div class=\"row\">\n          <h1 class=\"section-subtitle\">Objetivo:</h1>\n          <p>\n              Prestar servicios digitales de excelente calidad a precios competitivos\n              en el mercado adaptandonos asi a las posibilidades del cliente.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-5\">\n      <div class=\"col-md-6\">\n        <div class=\"service-1\">\n          <h1 class=\"section-subtitle\">Misión</h1>\n          <p class=\"text-justify\">\n            Nuestra misión como empresa de servicios web, es ofrecer soluciones de negocios al empreario\n            Venezolano en su incursión al mundo del internet, a través de un servicio de alta calidad,\n            tecnología confible, con un diseño de vanguardia y con un equipo de trabajo comprometido a\n            brindar las mejores soluciones al cliente.\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"service-1\">\n          <h1 class=\"section-subtitle\">Visión</h1>\n          <p>\n            Queremos sera la mejor alternativa en Diseño, programacion y servicios web en Venezuela para\n            las empresas que buscan explorar las oportunidades que ofrece el internet para impulsar su negocio,\n            en donde nuestra calidad se refleje en una excelente relación con nuestros clientes, y donde nuestra\n            prosperidad se comparta con nuestros colaboradores y proveedores.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row no-gutters mt-5\" data-aos=\"fade-up\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-12 mb-5 text-center\">\n          <h3 class=\"section-subtitle\">Nuestro Equipo</h3>\n          <h2 class=\"section-title text-black mb-4\">Tenemos un <strong>Equipo de Expertos</strong></h2>\n        </div>\n      </div>\n\n      <div class=\"row mt-5\">\n        <div class=\"col-lg-3 col-md-6 mb-lg-0\">\n          <div class=\"person\">\n            <figure>\n              <img src=\"../../../assets/images/person_1.jpg\" alt=\"Image\" class=\"img-fluid\">\n              <div class=\"social\">\n                <a href=\"#\"><span class=\"icon-facebook\"></span></a>\n                <a href=\"#\"><span class=\"icon-twitter\"></span></a>\n                <a href=\"#\"><span class=\"icon-linkedin\"></span></a>\n              </div>\n            </figure>\n            <div class=\"person-contents\">\n              <h3>José Daniel Pérez</h3>\n              <span class=\"position\">Desarrollador Full Stack</span>\n              <p style=\"font-size: 11px\">Ingeniero en Eléctronica.</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 mb-lg-0\">\n          <div class=\"person\">\n            <figure>\n              <img src=\"../../../assets/images/person_2.jpg\" alt=\"Image\" class=\"img-fluid\">\n              <div class=\"social\">\n                <a href=\"#\"><span class=\"icon-facebook\"></span></a>\n                <a href=\"#\"><span class=\"icon-twitter\"></span></a>\n                <a href=\"#\"><span class=\"icon-linkedin\"></span></a>\n              </div>\n            </figure>\n            <div class=\"person-contents\">\n              <h3>José Daniel Rangel</h3>\n              <span class=\"position\">Desarrollador BackEnd</span>\n              <p style=\"font-size: 11px\">Ingeniero en Informatica.</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 mb-lg-0\">\n          <div class=\"person\">\n            <figure>\n              <img src=\"../../../assets/images/person_3.jpg\" alt=\"Image\" class=\"img-fluid\">\n              <div class=\"social\">\n                <a href=\"#\"><span class=\"icon-facebook\"></span></a>\n                <a href=\"#\"><span class=\"icon-twitter\"></span></a>\n                <a href=\"#\"><span class=\"icon-linkedin\"></span></a>\n              </div>\n            </figure>\n            <div class=\"person-contents\">\n              <h3>Heyner Almerida</h3>\n              <span class=\"position\">Ingeniero Practicante</span>\n              <p style=\"font-size: 11px\">Ingeniero en Sistemas.</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 mb-lg-0\">\n          <div class=\"person\">\n            <figure>\n              <img src=\"../../../assets/images/person_4.jpg\" alt=\"Image\" class=\"img-fluid\">\n              <div class=\"social\">\n                <a href=\"#\"><span class=\"icon-facebook\"></span></a>\n                <a href=\"#\"><span class=\"icon-twitter\"></span></a>\n                <a href=\"#\"><span class=\"icon-linkedin\"></span></a>\n              </div>\n            </figure>\n            <div class=\"person-contents\">\n              <h3>Kyle Lucas</h3>\n              <span class=\"position\">Engineer</span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact/contact.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row contact-row\" style=\"margin-top: 5em\">\n\n    <!-- /.address and contact -->\n    <div class=\"col-sm-6 contact-left\">\n      <h2><strong><span class=\"highlight\">DATOS DE </span>CONTACTO</strong></h2>\n      <ul class=\"ul-address\">\n        <li>\n          <i class=\"far fa-map-marker-alt\"></i>Carretera Nacional Valencia-Maracay Sector el Carmen,\n          Diagonal a la Urb los Castores\n        </li>\n        <li>\n          <i class=\"fal fa-mobile-alt\"></i>(+58) 412 889 3163\n        </li>\n        <li>\n          <i class=\"fal fa-envelope-open\"></i><a href=\"mailto:info@yoursite.com\">infoventas@innovacionesjd.com</a>\n        </li>\n        <li>\n          <i class=\"fal fa-globe\"></i><a href=\"http://www.innovacionesjd.com\" target=\"blank\">www.innovacionesjd.com</a>\n        </li>\n      </ul>\n      <iframe src=\"https://www.google.com/maps/embed?pb=\" width=\"400\" height=\"350\" frameborder=\"0\" style=\"border:0\"\n        allowfullscreen></iframe>\n    </div>\n    \n    <div class=\"col-sm-6 contact-right\">\n      <app-contact-form></app-contact-form>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-carousel style=\"margin-top: 10px\" data-aos=\"zoom-in\"></app-carousel>\r\n<div class=\"container-fluid services-1-wrap\" data-aos=\"zoom-in\">\r\n  <div class=\"row mt-5 justify-content-center text-center\" data-aos=\"fade-up\">\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"section-subtitle\">Qué Servicios Ofrecemos?</h3>\r\n      <h2 class=\"section-title mb-4 text-black\">Somos una <strong>Empresa Lider</strong> en Diseño, Desarrollo y\r\n        Programación. Ya que nos gusta lo que hacemos\r\n      </h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row no-gutters\" data-aos=\"fade-up\">\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n      <div class=\"service-1\">\r\n        <span class=\"number\">01</span>\r\n        <div class=\"service-1-icon\">\r\n          <span class=\"flaticon-engineer\"></span>\r\n        </div>\r\n        <div class=\"service-1-content\">\r\n          <h3 class=\"service-heading\">Equipo Profesional</h3>\r\n          <p class=\"text-justify\">Contamos con un personal capacitado en el area para brindarte la mejor asesoria en lo que necesites.</p>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onAbout()\">\r\n          <i class=\"fal fa-eye\"></i> Leer Más\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n      <div class=\"service-1\">\r\n        <span class=\"number\">02</span>\r\n        <div class=\"service-1-icon\">\r\n          <span class=\"flaticon-compass\"></span>\r\n        </div>\r\n        <div class=\"service-1-content\">\r\n          <h4 class=\"service-heading\">Grandes Ideas</h4>\r\n          <p class=\"text-justify\">Proyectos hechos con ideas modernas e innovadoras que haran que tu web tenga un diseño contemporaneo</p>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onProjects()\">\r\n          <i class=\"fal fa-eye\"></i> Leer Más\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n      <div class=\"service-1\">\r\n        <span class=\"number\">03</span>\r\n        <div class=\"service-1-icon\">\r\n          <span class=\"flaticon-oil-platform\"></span>\r\n        </div>\r\n        <div class=\"service-1-content\">\r\n          <h4 class=\"service-heading\">Infraestructura</h4>\r\n          <p class=\"text-justify\">Los Servidores se encuentran en la mejor condicion para asegurar el buen funcionamiento de tu aplicacion</p>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onAbout()\">\r\n          <i class=\"fal fa-eye\"></i> Leer Más\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n      <div class=\"service-1\">\r\n        <span class=\"number\">04</span>\r\n        <div class=\"service-1-icon\">\r\n          <span class=\"flaticon-crane\"></span>\r\n        </div>\r\n        <div class=\"service-1-content\">\r\n          <h4 class=\"service-heading\">Trabajo de Calidad</h4>\r\n          <p class=\"text-justify\">Nuestros diseños cumplen con las buenas practicas de programación logrando asi tener un codigo flexible.</p>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"onProjects()\">\r\n          <i class=\"fal fa-eye\"></i> Leer Más\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"site-section\">\r\n  <div class=\"block-2\" data-aos=\"zoom-in\" style=\"background-color: #4389a2; padding: 7rem 0; margin-top: 2em;\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 mb-4 mb-lg-0\">\r\n          <img src=\"../../../assets/images/programacion_poster.jpg\" alt=\"Image \" class=\"img-fluid img-overlap\"\r\n            style=\"margin-top: -150px;\">\r\n        </div>\r\n        <div class=\"col-lg-5 ml-auto\">\r\n          <h3 class=\"section-subtitle\">Por qué Elegirnos?</h3>\r\n          <h2 class=\"section-title mb-4\">Mas de <strong>5 años de experiencia</strong> en programación</h2>\r\n          <div class=\"row my-5\">\r\n            <div class=\"col-lg-12 d-flex align-items-center\">\r\n              <span class=\"line-height-0 flaticon-mortarboard display-4 mr-4 text-warning\"></span>\r\n              <div>\r\n                <h4 class=\"m-0 h5 text-white\">Expertos en el Area</h4>\r\n                <p class=\"text-white text-justify\">\r\n                  Contamos con un equipo de trabajo con experiencia que ha \r\n                  participado en desarrollos para diferentes empresas del mercado.\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-12 d-flex align-items-center\">\r\n              <span class=\"line-height-0 flaticon-idea display-4 mr-4 text-warning\"></span>\r\n              <div>\r\n                <h4 class=\"m-0 h5 text-white\">Diseños Modernos</h4>\r\n                <p class=\"text-white text-justify\">\r\n                  Nuestros diseños se adaptan al dispositivo desde donde estas \r\n                  ingresando y cuentan con una interfaz grafica moderna.\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-12 d-flex align-items-center\">\r\n                <span class=\"line-height-0 flaticon-planning display-4 mr-4 text-warning\"></span>\r\n                <div>\r\n                  <h4 class=\"m-0 h5 text-white\">Precios Competitivos</h4>\r\n                  <p class=\"text-white text-justify\">Ofrecemos los mejores precios y los mas competitivos del mercado.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-12 d-flex align-items-center\">\r\n              <span class=\"line-height-0 flaticon-diploma display-4 mr-4 text-warning\"></span>\r\n              <div>\r\n                <h4 class=\"m-0 h5 text-white\">Capacitación Continua</h4>\r\n                <p class=\"text-white text-justify\">\r\n                  Nuestro equipo recibe capacitacion continua debido a \r\n                  la rapida evolución que existe en el mercado del internet.\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/notfound/notfound.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/notfound/notfound.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"wrapper\" class=\"error-page mt-5\">\n  <div class=\"error-box\">\n    <div class=\"error-body text-center\">\n      <img src=\"../../../assets/images/404-error.jpg\" alt=\"\" width=\"400px\" height=\"400px\" class=\"img-fluid\">\n      <h1>404</h1>\n      <h3 class=\"text-uppercase\">Pagina no Encontrada!</h3>\n       <p class=\"text-muted m-t-30 m-b-30\">La pagina a la que intentas acceder\n          se encuentra en construcción. Disculpas las molestias causadas.</p>\n      <a routerLink=\"/pages/index\" class=\"btn btn-info btn-rounded m-b-40\">\n        <i class=\"fas fa-home\"></i> Regresar</a>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pages.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pages.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-wrap\">\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n  <div class=\"to-top\"><i class=\"fa fa-angle-double-up\"></i></div>\n  <app-footer></app-footer>\n</div>\n<!-- Modal -->\n<!-- <div class=\"modal fade\" id=\"modalContacto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalContacto\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color: #4389a2 !important\">\n        <h5 class=\"modal-title\" id=\"modalContacto\" style=\"color: #fff !important\">Información para Contactarte</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" style=\"color: #fff !important\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <app-contact-form></app-contact-form>\n      </div>\n    </div>\n  </div>\n</div> -->\n   \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/services/service-extra/service-extra.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/services/service-extra/service-extra.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin: 5em 0\">\n  <div class=\"row\" data-aos=\"zoom-in\">\n    <div class=\"col-lg-8\" style=\"padding-top: 3em\">\n      <h3>Dominio</h3>\n      <div class=\"box text-justify\">\n        <p>Un dominio o nombre de dominio es el nombre que identifica un sitio web.\n          Cada dominio tiene que ser único en Internet. Por ejemplo, \"www.masadelante.com\"\n          es el nombre de dominio de la página web de Masadelante. Un solo servidor web puede\n          servir múltiples páginas web de múltiples dominios, pero un dominio sólo puede apuntar\n          a un servidor..</p>\n      </div>\n\n    </div>\n    <div class=\"col-lg-4\">\n      <img class=\"img-fluid\" src=\"../../../../assets/images/domains.png\" width=\"400px\" height=\"400px\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"row mt-5\" data-aos=\"zoom-in\">\n    <div class=\"col-md-4\">\n      <h4>Registrar Dominio</h4>\n      <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"position\">\n          <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n        </ng-container>\n        <!-- Dominio Column -->\n        <ng-container matColumnDef=\"dominio\">\n          <mat-header-cell *matHeaderCellDef> Dominio </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.dominio}} </mat-cell>\n        </ng-container>\n        <!-- Precio Column -->\n        <ng-container matColumnDef=\"precio\">\n          <mat-header-cell *matHeaderCellDef> Precio </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.precio}} </mat-cell>\n        </ng-container>\n        <!-- Symbol Moneda -->\n        <ng-container matColumnDef=\"moneda\">\n          <mat-header-cell *matHeaderCellDef> Moneda </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.moneda}} </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"row\">\n        <h3 class=\"col-md-3\" style=\"padding-top: 15px\">Buscar Dominio</h3>\n        <div class=\"col-md-9 form-inline\">\n          <mat-form-field class=\"full-width\" style=\"width: 90% !important\" appearance=\"outline\">\n            <mat-label>Buscar dominio</mat-label>\n            <input matInput placeholder=\"Dominio\" name=\"dominio\" [(ngModel)]=\"dominio\" required>\n            <button mat-icon-button matSuffix (click)=\"buscarDominio(dominio)\" style=\"padding-top: 15px !important\">\n              <mat-icon>search2</mat-icon>\n            </button>\n          </mat-form-field>\n          <mat-error>\n          </mat-error>\n          <!-- <div *ngFor=\"let validation of validation_messages.telefono\">\n                              </div> -->\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h4> Tipos de Dominios</h4>\n          <ul>\n            <li>\n              <h5 style=\"margin-top: 1em\">Dominios de Nivel Superior Genéricos</h5>\n              <p class=\"text-justify\">\n                Este tipo de dominios son los de uso común y más utlizados\n                a nivel mundial, no se ajustan a un país determinado y sus\n                terminaciones definen el concepto para el cual se utilizan:\n              </p>\n              <ul>\n                <li>\n                  <span style=\"font-weight: 400\">.com:</span> Sitio comercial\n                </li>\n                <li>\n                  <span style=\"font-weight: 400\">.net:</span> Empresa de servicios de Internet\n                </li>\n                <li>\n                  <span style=\"font-weight: 400\">.org:</span> Organización sin fines de lucro\n                </li>\n                <li>\n                  <span style=\"font-weight: 400\">.info:</span> Sitio informativo\n                </li>\n                <li>\n                  <span style=\"font-weight: 400\">.biz:</span> Sitio de negocios\n                </li>\n              </ul>\n            </li>\n            <li>\n              <h5 style=\"margin-top: 1em\">Dominios de Nivel Superior Geográfico</h5>\n              <p class=\"text-justify\"> Son conocidos también como dominios\n                territoriales y son usados por países o territorios dependientes;\n                se componen de 2 caracteres.</p>\n              <ul>\n                <li>\n                  <span style=\"font-weight: 400\">.ve:</span> Venezuela\n                </li>\n                <li>\n                  <span style=\"font-weight: 400\">.co:</span> Colombia\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br />\n  <app-pagos></app-pagos>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/services/service-hosting/service-hosting.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/services/service-hosting/service-hosting.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin: 5em 0\">\n  <div class=\"row\" data-aos=\"zoom-in\">\n    <div class=\"col-lg-4 img-box\">\n      <img class=\"img-fluid img-service\" src=\"../../../../assets/images/hosting.png\" width=\"400px\" height=\"400px\" alt=\"\">\n    </div>\n    <div class=\"col-lg-8\" style=\"padding-top: 3em\">\n      <h3>¿QUÉ ES UN HOSTING?</h3>\n      <div class=\"box text-justify\">\n        <p>El Hosting o Hospedaje es un espacio en un servidor que va a estar activo siempre y donde \n          se va a guardar la información de tu sitio web, es decir se puede definir como un lugar para tu página \n          web o correos electrónicos, aunque esta definición simplifica de manera conceptual el hecho de \n          que el alojamiento web es en realidad un espacio en Internet para prácticamente cualquier tipo de \n          información, sea archivos, sistemas, correos electrónicos, videos y otros..</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"box colored-bg text-center\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center text-center\">\n        <div class=\"col-lg-5\">\n          <h3 class=\"section-subtitle\">Planes Alojamiento Web (Hosting)</h3>\n          <h4 class=\"section-title mb-4 text-black\">En la categoria de <strong>Alojamiento Web</strong> tenemos los\n            siguientes\n            planes\n            para ti. <strong> Si no ves el que buscas consultanos te podemos asesorar</strong>\n          </h4>\n        </div>\n      </div>\n      <app-messages></app-messages>\n      <div class=\"row package-option \" data-aos=\"fade-up\">\n        <div class=\"col-sm-4\">\n          <div class=\"price-box\">\n            <div class=\"price-heading text-center\">\n              <!-- /.package icon -->\n              <i class=\"fa fa-leaf pe-5x\"></i>\n              <!-- /.package name -->\n              <h3>Hosting Basico</h3>\n            </div>\n\n            <!-- /.price -->\n            <div class=\"price-group text-center\">\n              <span class=\"dollar\">USD$</span>\n              <span class=\"price\">60</span>\n              <span class=\"time\">.00</span>\n              <p>Anual</p>\n            </div>\n\n            <!-- /.package features -->\n            <ul class=\"price-feature text-center\">\n              <li><strong>200Mb de Espacio</strong></li>\n              <li>Dominio Gratis x 1 Año</li>\n              <li>Certificado SSL x 1 Año</li>\n              <li><strong>.ve</strong> Gratis x 1 Año</li>\n              <li>Soporta 1 Sitios web</li>\n              <li><strong>Instalador de Aplicaciones</strong></li>\n              <li>Copias de Seguridad\tSemanales</li>\n              <li>01 Formulario de contacto</li>\n              <li>05 Correo corp. x 1 año</li>\n            </ul>\n\n            <!-- /.package button -->\n            <div class=\"price-footer text-center\">\n                <a class=\"btn btn-price btn-outline-primary\" [routerLink]=\"['/pages/contacto']\" > <i class=\"fal fa-phone\"></i> CONTÁCTANOS</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"price-box\">\n            <div class=\"price-heading text-center\">\n              <!-- /.package icon -->\n              <i class=\"fal fa-server\"></i>\n\n              <!-- /.package name -->\n              <h3>Hosting Avanzado</h3>\n            </div>\n\n            <!-- /.price -->\n            <div class=\"price-group text-center\">\n              <span class=\"dollar\">USD$</span>\n              <span class=\"price\">90</span>\n              <span class=\"time\">.00</span>\n              <p>Anual</p>\n            </div>\n\n            <!-- /.package features -->\n            <ul class=\"price-feature text-center\">\n              <li><strong>500Mb de Espacio</strong></li>\n              <li>Dominio Gratis x 1 Año</li>\n              <li>Certificado SSL x 1 Año</li>\n              <li><strong>.ve</strong> Gratis x 1 Año</li>\n              <li>Soporta 3 Sitios web</li>\n              <li><strong>Instalador de Aplicaciones</strong></li>\n              <li>Copias de Seguridad\tSemanales</li>\n              <li>01 Formulario de contacto</li>\n              <li>80 Correo corp. x 1 año</li>\n            </ul>\n\n            <!-- /.package button -->\n            <div class=\"price-footer text-center\">\n                <a class=\"btn btn-price btn-outline-primary\" [routerLink]=\"['/pages/contacto']\" > <i class=\"fal fa-phone\"></i> CONTÁCTANOS</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"price-box\">\n            <div class=\"price-heading text-center\">\n              <!-- /.package icon -->\n              <i class=\"fal fa-industry\"></i>\n\n              <!-- /.package name -->\n              <h3>Hosting Empresarial</h3>\n            </div>\n\n            <!-- /.price -->\n            <div class=\"price-group text-center\">\n              <span class=\"dollar\">USD$</span>\n              <span class=\"price\">120</span>\n              <span class=\"time\">.00</span>\n              <p>Anual</p>\n            </div>\n\n            <!-- /.package features -->\n            <ul class=\"price-feature text-center\">\n              <li><strong>1Gb de Espacio</strong></li>\n              <li>Dominio Gratis x 1 Año</li>\n              <li>Certificado SSL x 1 Año</li>\n              <li><strong>.ve</strong> Gratis x 1 Año</li>\n              <li>Sitios web ilimitados</li>\n              <li>Instalador de Aplicaciones</li>\n              <li>Copias de Seguridad\tSemanales</li>\n              <li>01 Formulario de contacto</li>\n              <li>200 Correo corp. x 1 año</li>\n            </ul>\n\n            <!-- /.package button -->\n            <div class=\"price-footer text-center\">\n                <a class=\"btn btn-price btn-outline-primary\" [routerLink]=\"['/pages/contacto']\" > <i class=\"fal fa-phone\"></i> CONTÁCTANOS</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-pagos></app-pagos>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/services/service-web/services-web.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/services/service-web/services-web.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin: 5em 0\">\n  <app-messages></app-messages>\n  <div class=\"row\" data-aos=\"zoom-in\">\n    <div class=\"col-lg-8\" style=\"padding-top: 3em\">\n      <h3>¿Diseño Responsive?</h3>\n      <div class=\"box text-justify\">\n        <p>Sitios web que se adaptan de forma dinámica a la resolución del dispositivo visitante. \n          Y más que una tendencia, para las empresas (sobre todo las que recién se inician) que desean \n          ser encontradas a través del buscador Google,  se está haciendo una obligación, y esto debido\n          a que el buscador penaliza a aquellos sitios web que no estén preparados para mostrar su\n          contenido en dispositivos móviles.</p>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <img class=\"img-fluid\" src=\"../../../../assets/images/dispositivos.png\" width=\"400px\" height=\"400px\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"row mt-5 justify-content-center text-center\">\n    <div class=\"col-lg-5\">\n      <h3 class=\"section-subtitle\">Planes Diseño Web</h3>\n      <h4 class=\"section-title mb-4 text-black\">En la categoria de <strong>Diseño Web</strong> tenemos los siguientes\n        planes\n        para ti. <strong> Si no ves el que buscas consultanos te podemos asesorar</strong>\n      </h4>\n    </div>\n  </div>\n  <div class=\"row package-option \" data-aos=\"fade-up\">\n    <div class=\"col-sm-3\">\n      <div class=\"price-box\">\n        <div class=\"price-heading text-center\">\n          <!-- /.package icon -->\n          <i class=\"fab fa-html5\"></i>\n          <!-- /.package name -->\n          <h3>Web Basica</h3>\n        </div>\n\n        <!-- /.price -->\n        <div class=\"price-group text-center\">\n          <span class=\"dollar\">USD$</span>\n          <span class=\"price\">130</span>\n          <span class=\"time\">.00</span>\n        </div>\n\n        <!-- /.package features -->\n        <ul class=\"price-feature text-center\">\n          <li>Web HTML5 + CSS + JS</li>\n          <li><strong>+Plan Hosting Basic</strong></li>\n          <li>Diseño Moderno</li>\n          <li>Responsive Básico <a class=\"poppover\" href=\"javascript:;\" role=\"button\"\n              ngbPopover=\"Tu web sera compatible con dispositivos de escritorio y moviles\" popoverClass=\"custom-class\"\n              triggers=\"mouseenter:mouseleave\">\n              <i class=\"fal fa-question-circle\"></i>\n            </a>\n          </li>\n          <li><strong>Blog Personal</strong></li>\n          <li>Hasta 4 Secciones</li>\n          <li>01 Formulario de contacto</li>\n          <li>Mapa de Ubicación</li>\n          <li><strong>100Mb de Almacenamiento</strong></li>\n          <li>Hasta 5 dias Habiles</li>\n        </ul>\n\n        <!-- /.package button -->\n        <div class=\"price-footer text-center\">\n            <a class=\"btn btn-price btn-outline-primary\" [routerLink]=\"['/pages/contacto']\" > <i class=\"fal fa-phone\"></i> CONTÁCTANOS</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"price-box\">\n        <div class=\"price-heading text-center\">\n          <!-- /.package icon -->\n          <i class=\"fal fa-suitcase\"></i>\n\n          <!-- /.package name -->\n          <h3>Web Negocios</h3>\n        </div>\n\n        <!-- /.price -->\n        <div class=\"price-group text-center\">\n          <span class=\"dollar\">USD$</span>\n          <span class=\"price\">180</span>\n          <span class=\"time\">.00</span>\n        </div>\n\n        <!-- /.package features -->\n        <ul class=\"price-feature text-center\">\n          <li>Web HTML5 o Angular 8+</li>\n          <li><strong>+Plan Hosting Avanzado</strong></li>\n          <li>Diseño Moderno</li>\n          <li>Responsive Full\n            <a class=\"poppover\" href=\"javascript:;\" role=\"button\"\n              ngbPopover=\"Tu web sera compatible con dispositivos de escritorio, tabletas y moviles\"\n              popoverClass=\"custom-class\" triggers=\"mouseenter:mouseleave\">\n              <i class=\"fal fa-question-circle\"></i>\n            </a>\n          </li>\n          <li><strong>Pagina Empresarial</strong></li>\n          <li>Hasta 6 Secciones</li>\n          <li>01 Formulario de contacto</li>\n          <li>Mapa de Ubicación</li>\n          <li><strong>150Mb de Almacenamiento</strong></li>\n          <li>Entre 7-15 dias habiles</li>\n        </ul>\n\n        <!-- /.package button -->\n        <div class=\"price-footer text-center\">\n          <a class=\"btn btn-price btn-outline-primary\" [routerLink]=\"['/pages/contacto']\" > <i class=\"fal fa-phone\"></i> CONTÁCTANOS</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"price-box\">\n        <div class=\"price-heading text-center\">\n          <!-- /.package icon -->\n          <i class=\"fal fa-eye\"></i>\n\n          <!-- /.package name -->\n          <h3>Web Corporativa</h3>\n        </div>\n\n        <!-- /.price -->\n        <div class=\"price-group text-center\">\n          <span class=\"dollar\">USD$</span>\n          <span class=\"price\">250</span>\n          <span class=\"time\">.00</span>\n        </div>\n\n        <!-- /.package features -->\n        <ul class=\"price-feature text-center\">\n          <li><strong>Angular 8+ o React</strong></li>\n          <li><strong>+Plan Hosting Empresarial</strong></li>\n          <li>Diseño Moderno</li>\n          <li>Responsive Full\n            <a class=\"poppover\" href=\"javascript:;\" role=\"button\"\n              ngbPopover=\"Tu web sera compatible con dispositivos de escritorio, tabletas y moviles\"\n              popoverClass=\"custom-class\" triggers=\"mouseenter:mouseleave\">\n              <i class=\"fal fa-question-circle\"></i>\n            </a>\n          </li>\n          <li>Pagina con Dashboard</li>\n          <li>Hasta 8 Secciones</li>\n          <li>01 Formulario de contacto</li>\n          <li>Login/Registro Usuarios</li>\n          <li>200Mb de Espacio</li>\n          <li>Entre 15-21 dias Habiles</li>\n        </ul>\n\n        <!-- /.package button -->\n        <div class=\"price-footer text-center\">\n            <a class=\"btn btn-price btn-outline-primary\" [routerLink]=\"['/pages/contacto']\" > <i class=\"fal fa-phone\"></i> CONTÁCTANOS</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"price-box\">\n        <div class=\"price-heading text-center\">\n          <!-- /.package icon -->\n          <i class=\"fal fa-shopping-cart\"></i>\n\n          <!-- /.package name -->\n          <h3>Carrito de Compras</h3>\n        </div>\n\n        <!-- /.price -->\n        <div class=\"price-group text-center\">\n          <span class=\"dollar\">USD$</span>\n          <span class=\"price\">300</span>\n          <span class=\"time\">.00</span>\n        </div>\n\n        <!-- /.package features -->\n        <ul class=\"price-feature text-center\">\n          <li><strong>Angular 8+/PHP</strong></li>\n          <li><strong>+Plan Hosting Empresarial</strong></li>\n          <li>Diseño Moderno</li>\n          <li>Responsive Full\n            <a class=\"poppover\" href=\"javascript:;\" role=\"button\"\n              ngbPopover=\"Tu web sera compatible con dispositivos de escritorio, tabletas y moviles\"\n              popoverClass=\"custom-class\" triggers=\"mouseenter:mouseleave\">\n              <i class=\"fal fa-question-circle\"></i>\n            </a>\n          </li>\n          <li>E-Commerce</li>\n          <li>Hasta 8 Secciones</li>\n          <li>02 Formulario de contacto</li>\n          <li><strong>Administrable</strong></li>\n          <!-- <li>Diseño Moderno</li> -->\n          <li>250Mb de Espacio</li>\n          <li>Hasta 20 dias Habiles</li>\n        </ul>\n\n        <!-- /.package button -->\n        <div class=\"price-footer text-center\">\n            <a class=\"btn btn-price btn-outline-primary\" [routerLink]=\"['/pages/contacto']\" > <i class=\"fal fa-phone\"></i> CONTÁCTANOS</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-pagos></app-pagos>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "./src/app/pages/notfound/notfound.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_services_service_web_services_web_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/services/service-web/services-web.component */ "./src/app/pages/services/service-web/services-web.component.ts");
/* harmony import */ var _pages_services_service_hosting_service_hosting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/services/service-hosting/service-hosting.component */ "./src/app/pages/services/service-hosting/service-hosting.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_services_service_extra_service_extra_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/services/service-extra/service-extra.component */ "./src/app/pages/services/service-extra/service-extra.component.ts");



// Components








var routes = [
    {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full'
    },
    {
        path: 'pages',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
        children: [
            {
                path: 'index',
                component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            },
            {
                path: 'about',
                component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
            },
            {
                path: 'services/web',
                component: _pages_services_service_web_services_web_component__WEBPACK_IMPORTED_MODULE_7__["ServiceWebComponent"]
            },
            {
                path: 'services/hosting',
                component: _pages_services_service_hosting_service_hosting_component__WEBPACK_IMPORTED_MODULE_8__["ServiceHostingComponent"]
            },
            {
                path: 'services/extras',
                component: _pages_services_service_extra_service_extra_component__WEBPACK_IMPORTED_MODULE_10__["ServiceExtraComponent"]
            },
            {
                path: 'contacto',
                component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
            }
        ]
    },
    {
        path: 'error_404',
        component: _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"]
    },
    {
        path: '**',
        redirectTo: 'error_404',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'InnovacionesJD';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/pages/index']);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/carousel/carousel.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/components/contact-form/contact-form.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _pagos_pagos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pagos/pagos.component */ "./src/app/components/pagos/pagos.component.ts");
















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__["ContactFormComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"], _pagos_pagos_component__WEBPACK_IMPORTED_MODULE_15__["PagosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]
            ],
            exports: [
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__["ContactFormComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"],
                _pagos_pagos_component__WEBPACK_IMPORTED_MODULE_15__["PagosComponent"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/contact-form/contact-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/contact-form/contact-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}\n\n.shipping-card {\n  min-width: 120px;\n  margin: 10px auto;\n}\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNoaXBwaW5nLWNhcmQge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jb2wge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/contact-form/contact-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/contact-form/contact-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(fb) {
        this.fb = fb;
        this.summited = false;
        this.validation_messages = {};
        this.validation_messages = {
            celular: [
                {
                    type: "minlength",
                    message: "El numero es invalido debe tener 12 digitos"
                },
                {
                    type: "maxlength",
                    message: "El numero es invalido debe tener 12 digitos"
                },
                { type: "pattern", message: "El campo solo debe contener numeros" }
            ],
            telefono: [
                {
                    type: "minlength",
                    message: "El numero es invalido debe tener 12 digitos"
                },
                {
                    type: "maxlength",
                    message: "El numero es invalido debe tener 12 digitos"
                },
                { type: "pattern", message: "El campo solo debe contener numeros" }
            ]
        };
        this.addressForm = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            asunto: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            celular: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]\d{6,10}$/)
                    ])
                ]
            ],
            telefono: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]\d{6,10}$/)
                ])
            ]
        });
    }
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ContactFormComponent.prototype, "f", {
        get: function () {
            return this.addressForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ContactFormComponent.prototype.onSubmit = function () {
        this.summited = true;
        if (this.addressForm.invalid) {
            console.log(this.f.firstName.value);
            return;
        }
        alert("Thanks!");
    };
    ContactFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-contact-form",
            template: __webpack_require__(/*! raw-loader!./contact-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.css */ "./src/app/components/contact-form/contact-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/footer/footer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/layout/layout.module.ts ***!
  \****************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/layout/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");




// Components


var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () { };
    MessagesComponent.prototype.openedMessages = function () {
        $('.theme-config').toggleClass('opened');
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/messages/messages.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/components/pagos/pagos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/pagos/pagos.component.ts ***!
  \*****************************************************/
/*! exports provided: PagosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosComponent", function() { return PagosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagosComponent = /** @class */ (function () {
    function PagosComponent() {
    }
    PagosComponent.prototype.ngOnInit = function () {
    };
    PagosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagos',
            template: __webpack_require__(/*! raw-loader!./pagos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pagos/pagos.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagosComponent);
    return PagosComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about/about.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_3__["init"]();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.onAbout = function () {
        this.router.navigate(['/pages/about']);
    };
    HomeComponent.prototype.onProjects = function () {
        this.router.navigate(['/pages/projects']);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/notfound/notfound.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/notfound/notfound.component.ts ***!
  \******************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/notfound/notfound.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
        // BACK TO TOP
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0)
                $(".to-top").fadeIn();
            else
                $(".to-top").fadeOut();
        });
        $(".to-top").click(function (e) {
            $("html, body").animate({ scrollTop: 0 }, 600);
        });
    };
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pages",
            template: __webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pages.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/pages/notfound/notfound.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _services_service_web_services_web_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/service-web/services-web.component */ "./src/app/pages/services/service-web/services-web.component.ts");
/* harmony import */ var _services_service_hosting_service_hosting_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/service-hosting/service-hosting.component */ "./src/app/pages/services/service-hosting/service-hosting.component.ts");
/* harmony import */ var _services_service_extra_service_extra_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/service-extra/service-extra.component */ "./src/app/pages/services/service-extra/service-extra.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_10__["NotfoundComponent"],
                _pages_component__WEBPACK_IMPORTED_MODULE_8__["PagesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _services_service_web_services_web_component__WEBPACK_IMPORTED_MODULE_12__["ServiceWebComponent"],
                _services_service_hosting_service_hosting_component__WEBPACK_IMPORTED_MODULE_13__["ServiceHostingComponent"],
                _services_service_extra_service_extra_component__WEBPACK_IMPORTED_MODULE_14__["ServiceExtraComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_10__["NotfoundComponent"],
                _pages_component__WEBPACK_IMPORTED_MODULE_8__["PagesComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _services_service_web_services_web_component__WEBPACK_IMPORTED_MODULE_12__["ServiceWebComponent"],
                _services_service_hosting_service_hosting_component__WEBPACK_IMPORTED_MODULE_13__["ServiceHostingComponent"],
                _services_service_extra_service_extra_component__WEBPACK_IMPORTED_MODULE_14__["ServiceExtraComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/services/service-extra/service-extra.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/services/service-extra/service-extra.component.ts ***!
  \*************************************************************************/
/*! exports provided: ServiceExtraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceExtraComponent", function() { return ServiceExtraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ELEMENT_DATA = [
    { position: 1, dominio: '.net', precio: 250000, moneda: 'BsS.' },
    { position: 2, dominio: '.com', precio: 210000, moneda: 'BsS.' },
    { position: 3, dominio: '.org', precio: 240000, moneda: 'BsS.' },
    { position: 4, dominio: '.info', precio: 250000, moneda: 'BsS.' },
    { position: 5, dominio: '.biz', precio: 280000, moneda: 'BsS.' },
    { position: 6, dominio: '.net.ve', precio: 22000, moneda: 'BsS.' },
    { position: 7, dominio: '.com.ve', precio: 22000, moneda: 'BsS.' },
    { position: 8, dominio: '.org.ve', precio: 22000, moneda: 'BsS.' },
    { position: 9, dominio: '.co.ve', precio: 22000, moneda: 'BsS.' },
    { position: 10, dominio: '.web.ve', precio: 22000, moneda: 'BsS.' },
    { position: 11, dominio: '.info.ve', precio: 22000, moneda: 'BsS.' },
];
var ServiceExtraComponent = /** @class */ (function () {
    function ServiceExtraComponent() {
        this.displayedColumns = ['position', 'dominio', 'precio', 'moneda'];
        this.dataSource = ELEMENT_DATA;
    }
    ServiceExtraComponent.prototype.ngOnInit = function () {
    };
    ServiceExtraComponent.prototype.buscarDominio = function () {
    };
    ServiceExtraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-service-extra",
            template: __webpack_require__(/*! raw-loader!./service-extra.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/services/service-extra/service-extra.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServiceExtraComponent);
    return ServiceExtraComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/service-hosting/service-hosting.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/services/service-hosting/service-hosting.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ServiceHostingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHostingComponent", function() { return ServiceHostingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServiceHostingComponent = /** @class */ (function () {
    function ServiceHostingComponent() {
    }
    ServiceHostingComponent.prototype.ngOnInit = function () {
        // TOGGLE MESSAGES BOX
        //    $('.theme-config-toggle').on('click', function() {
        //     $(this)
        //       .parents('.theme-config')
        //       .toggleClass('opened');
        //   });
    };
    ServiceHostingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-hosting',
            template: __webpack_require__(/*! raw-loader!./service-hosting.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/services/service-hosting/service-hosting.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServiceHostingComponent);
    return ServiceHostingComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/service-web/services-web.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/services/service-web/services-web.component.ts ***!
  \**********************************************************************/
/*! exports provided: ServiceWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWebComponent", function() { return ServiceWebComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServiceWebComponent = /** @class */ (function () {
    function ServiceWebComponent() {
    }
    ServiceWebComponent.prototype.ngOnInit = function () {
        // TOGGLE MESSAGES BOX
        //  $('.theme-config-toggle').on('click', function() {
        //   $(this)
        //     .parents('.theme-config')
        //     .toggleClass('opened');
        // });
    };
    ServiceWebComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! raw-loader!./services-web.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/services/service-web/services-web.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServiceWebComponent);
    return ServiceWebComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nabellanedar\PhpstormProjects\InnovacionesJD\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
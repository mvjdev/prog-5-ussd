"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const MENUS = {
    main1: {
        options: {
            '1': 'MVOLA',
            '2': 'Rappelle moi',
            '3': 'SOS Credit',
            '4': 'Services YAS',
            '5': 'Promotion',
            '6': 'Produits et Divertissement',
            '7': 'Banques et Micro-Finances',
            '0': 'Page suivante'
        },
        next: 'main2'
    },
    main2: {
        options: {
            '8': 'Mon identite',
            '9': 'Configurer mon mobile',
            '00': 'Page précédente'
        },
        previous: 'main1'
    },
    mvola1: {
        options: {
            '1': 'Acheter Crédit ou Offre Yas',
            '2': 'Transférer argent (vers toute destination)',
            '3': 'Mvola Crédit ou Epargne',
            '4': "Retrait d'argent",
            '#': 'Page suivante'
        },
        next: 'mvola2',
        parent: 'main1'
    },
    mvola2: {
        options: {
            '5': 'Paiement Factures & Partenaires',
            '6': 'Mon compte',
            '7': "Recevoir de l'argent",
            '8': 'Banques et Micro-Finances',
            '*': 'Page précédente',
            '**': 'Menu principal'
        },
        previous: 'mvola1',
        parent: 'main1'
    },
    achat1: {
        options: {
            '1': 'Crédit pour mon numéro',
            '2': 'Crédit pour autre numéro',
            '4': 'Offre pour mon numéro',
            '5': 'Offre pour autre numéro',
            '*': 'Retour MVOLA'
        },
        parent: 'mvola1'
    },
    achat1_1: {
        options: {
            '1': 'Recharger directement',
            '2': 'Code recharge',
            '*': 'Retour précédent'
        },
        parent: 'achat1'
    },
    achat1_2: {
        options: {
            '1': 'Recharger directement',
            '2': 'Code recharge',
            '*': 'Retour précédent'
        },
        parent: 'achat1'
    },
    achat1_4: {
        options: {
            '1': 'MORA (VOIX-SMS-INTERNET)',
            '2': 'FIRST (VOIX-SMS-INTERNET)',
            '3': 'YELLOW (SMS-INTERNET)',
            '4': 'YAS Net (INTERNET)',
            '*': 'Retour précédent'
        },
        parent: 'achat1'
    },
    achat1_5: {
        options: {
            '0': 'Entrer numéro téléphone',
            '*': 'Retour précédent'
        },
        parent: 'achat1'
    }
};
let currentPage = 'main1';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function showMenu() {
    console.clear();
    console.log('=== Menu ===');
    const menu = MENUS[currentPage];
    Object.entries(menu.options).forEach(([key, label]) => {
        console.log(`${key} ${label}`);
    });
    rl.question('\nVotre choix : ', handleChoice);
}
function navigate(choice) {
    const menu = MENUS[currentPage];
    // Navigation entre pages (next, previous, parent)
    if (choice === '0' && menu.next) {
        currentPage = menu.next;
        return true;
    }
    if (choice === '00' && menu.previous) {
        currentPage = menu.previous;
        return true;
    }
    if (choice === '#' && menu.next) {
        currentPage = menu.next;
        return true;
    }
    if (choice === '*' && menu.previous) {
        currentPage = menu.previous;
        return true;
    }
    if (choice === '**' && menu.parent) {
        currentPage = menu.parent;
        return true;
    }
    // Navigation vers sous-menus spécifiques
    if (currentPage === 'main1' && choice === '1') {
        currentPage = 'mvola1';
        return true;
    }
    if (currentPage === 'mvola1' && choice === '1') {
        currentPage = 'achat1';
        return true;
    }
    if (currentPage === 'achat1' && ['1', '2', '4', '5'].includes(choice)) {
        currentPage = `achat1_${choice}`;
        return true;
    }
    return false;
}
function handleChoice(choice) {
    const menu = MENUS[currentPage];
    if (navigate(choice)) {
        showMenu();
        return;
    }
    if (menu.options[choice]) {
        console.log(`\nVous avez choisi : ${menu.options[choice]}`);
        rl.close();
        return;
    }
    console.log('\nChoix invalide.');
    setTimeout(showMenu, 1000);
}
showMenu();

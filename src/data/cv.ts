export interface CvData {
    personalInfo: {
        name: string;
        title: string;
        email: string;
        phone: string;
        website: string;
        linkedin: string;
        misc: string;
        photo: string;
    };
    summary: string;
    skills: {
        mainframe: string[];
        open: string[];
        methodology: string[];
    };
    certifications: string[];
    softSkills: string[];
    languages: {
        name: string;
        level: string;
        pct: number;
    }[];
    experiences: {
        role: string;
        company: string;
        date: string;
        details: string[];
    }[];
    education: {
        degree: string;
        school: string;
        date: string;
        details?: string[];
    }[];
    interests: {
        icon: string;
        text: string;
    }[];
}

export const cvData: CvData = {

    personalInfo: {
        name: `Jonathan GATARD`,
        title: `Ingénieur Mainframe & Interopérabilité`,
        email: `jonathan.gatard@gmail.com`,
        phone: `06 13 54 83 19`,
        website: `jonathan-gatard.fr`,
        linkedin: `linkedin.com/in/jonathan-gatard`,
        misc: `Permis B — Véhiculé`,
        photo: `/images/profil.png`,
    },

    summary: `Ma double compétence en Mainframe et Open me permet de moderniser les infrastructures historiques en y intégrant les meilleures pratiques d'automatisation et d'agilité.`,

    skills: {
        mainframe: [
            `z/OS`,
            `TSO`,
            `USS`,
            `JCL`,
            `DB2`,
            `Zowe`,
            `Rexx`,
        ],
        open: [
            `Python`,
            `Linux`,
            `Git`,
            `Ansible`,
            `Docker`,
            `SQL`,
            `Grafana`,
        ],
        methodology: [
            `Agile`,
            `Amélioration continue`,
            `DevOps`,
            `Kanban`,
        ],
    },

    certifications: [
        `ITIL 4 Foundation`,
        `TOEIC C1`,
    ],

    softSkills: [
        `Autonomie`,
        `Esprit d'analyse`,
        `Gestion des priorités`,
        `Travail en équipe`,
        `Vulgarisation technique`,
        `Adaptabilité`,
    ],

    languages: [
        { name: `Français`, level: `Natif`, pct: 100 },
        { name: `Anglais`, level: `Courant`, pct: 85 },
        { name: `Espagnol`, level: `Scolaire`, pct: 35 },
        { name: `Slovaque`, level: `Notions`, pct: 15 },
    ],

    experiences: [
        {
            role: `Ingénieur Mainframe & Interopérabilité`,
            company: `Solutec & CAGIP (Rodez)`,
            date: `09/2023 – Présent`,
            details: [
                `MCO & Run z/OS : Installation de matière CATS, suivi de production, astreintes et diagnostic incidents.`,
                `Modernisation : Exploitation de Python sur Mainframe (requêtes SQL, appels API, automatisation de traitements).`,
                `Projets techniques : Outil moderne de gestion de logs Mainframe, playbooks Ansible et pipelines GitLab CI.`,
                `AppOps : Accompagnement des squads CATS, interface entre besoins applicatifs et contraintes d'exploitation.`,
            ],
        },
        {
            role: `Manager Projets & Ingénieur DevOps`,
            company: `Stellantis (Trnava - Slovaquie)`,
            date: `2021 – 2023`,
            details: [
                `Management : Encadrement de 4 stagiaires et pilotage de projets IT dans un environnement industriel.`,
                `Développement : Applications Fullstack (React/NodeJS), pipelines CI/CD et monitoring temps réel (Grafana, Node-Red).`,
                `Data : Conception de tableaux de bord PowerBI et collecte automatisée de données industrielles.`,
            ],
        },
        {
            role: `Ingénieur Projets Logistique & Amélioration Continue`,
            company: `LISI Aerospace (Parthenay) — Alternance puis CDI`,
            date: `2016 – 2021`,
            details: [
                `Logiciel : Développement d'outils de gestion et de suivi de production internes.`,
                `Logistique : Optimisation de flux, implantation de zones de stockage pour usines neuves.`,
                `Lean : Déploiement d'outils Lean (5S, VSM, PDCA) et amélioration de la satisfaction client.`,
            ],
        },
    ],

    education: [
        {
            degree: `Sécurité & Réseaux (Autodidacte)`,
            school: `TU Graz (Autriche)`,
            date: `09/2022 – 02/2023`,
            details: [
                `Sécurité réseau, CTF, Intelligence Artificielle et Réalité Augmentée.`,
            ],
        },
        {
            degree: `Ingénieur Aéronautique & Spatial (Alternance)`,
            school: `CNAM / ISAE-Supaero / ISAE-ENSMA`,
            date: `2016 – 2019`,
            details: [
                `Aérodynamique, propulsion, thermodynamique, matériaux composites et mécanique des fluides.`,
            ],
        },
        {
            degree: `DUT Science et Génie des Matériaux`,
            school: `IUT Nantes`,
            date: `2014 – 2016`,
            details: [
                `Étude des métaux, polymères, composites et caractérisation mécanique.`,
            ],
        },
    ],

    interests: [
        {
            icon: `home`,
            text: `Maison connectée pilotée par serveur domotique personnel (25+ services)`,
        },
        {
            icon: `globe`,
            text: `Administration réseau domestique (routeur, VPN, vidéosurveillance)`,
        },
        {
            icon: `plane`,
            text: `Aéromodélisme : construction et pilotage d'aéronefs radiocommandés`,
        },
        {
            icon: `wrench`,
            text: `Mécanique automobile : préparation moteur et diagnostic électronique`,
        },
        {
            icon: `printer`,
            text: `Fabrication numérique : impression 3D, découpe laser et fraiseuse`,
        },
        {
            icon: `leaf`,
            text: `Terrariophilie et potager automatisé`,
        },
    ],
};

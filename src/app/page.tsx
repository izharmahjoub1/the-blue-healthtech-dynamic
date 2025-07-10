'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const translations = {
    fr: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        solutions: 'Solutions',
        flagship: 'Produit Phare',
        team: 'Équipe',
        events: 'Événements',
        news: 'Actualités',
        contact: 'Contact'
      },
      hero: {
        title: 'The Blue Healthtech',
        subtitle: 'Transformation Numérique pour l\'Équité en Santé',
        description: 'Nous développons des solutions innovantes pour améliorer l\'accès aux soins de santé et promouvoir l\'équité sanitaire à travers le monde.',
        cta: 'Planifier un appel'
      },
      about: {
        title: 'À propos de nous',
        description: 'The Blue Healthtech est une entreprise innovante spécialisée dans la transformation numérique du secteur de la santé. Notre mission est de démocratiser l\'accès aux soins de santé de qualité grâce à des technologies avancées.',
        vision: 'Notre vision',
        visionText: 'Un monde où chaque individu, peu importe sa localisation géographique ou son statut socio-économique, a accès à des soins de santé de qualité.',
        mission: 'Notre mission',
        missionText: 'Développer et déployer des solutions technologiques innovantes qui améliorent l\'efficacité, l\'accessibilité et l\'équité des systèmes de santé.'
      },
      solutions: {
        title: 'Nos Solutions',
        description: 'Nous proposons une gamme complète de solutions numériques pour moderniser le secteur de la santé.',
        items: [
          {
            title: 'Plateforme de Télémédecine',
            description: 'Connectez les patients avec les professionnels de santé en temps réel, où qu\'ils soient.'
          },
          {
            title: 'Gestion des Données de Santé',
            description: 'Solutions sécurisées pour la collecte, l\'analyse et le partage des données médicales.'
          },
          {
            title: 'Intelligence Artificielle',
            description: 'Algorithms d\'IA pour le diagnostic précoce et la prévention des maladies.'
          },
          {
            title: 'Mobile Health',
            description: 'Applications mobiles pour le suivi de santé et la prévention.'
          }
        ],
        featuredProduct: {
          title: 'Produit vedette',
          subtitle: 'Football Health Predictor',
          description: 'Football Health Predictor révolutionne la gestion du football moderne grâce à une plateforme SaaS complète, intuitive et pilotée par l\'intelligence artificielle. Conçue pour répondre aux besoins croissants des clubs, fédérations et académies, Football Health Predictor centralise et automatise l\'ensemble des processus essentiels : de l\'inscription des joueurs avec intégration FIFA ID à la gestion documentaire, en passant par l\'organisation des compétitions, le suivi des performances et la communication interne.',
          features: [
            'Collecte sécurisée et exhaustive des données joueurs',
            'Gestion numérique des documents officiels',
            'Envoi automatisé de notifications pour la conformité',
            'Outils avancés de suivi médical et d\'analyse de la charge de travail',
            'Prévention des blessures alimentée par l\'IA',
            'Assistant médical intelligent pour la documentation automatique',
            'Alertes IA pour anticiper les risques de blessure',
            'Plans personnalisés d\'entraînement et de récupération',
            'Organisation des compétitions avec planification automatisée',
            'Architecture multi-tenant pour toutes les tailles d\'organisation'
          ]
        },
        flagshipProduct: {
          title: 'Produit phare',
          subtitle: 'Solution d\'Interopérabilité Numérique en Santé pour l\'Afrique',
          description: 'Notre solution phare représente l\'aboutissement de plus de deux décennies d\'expertise en santé numérique et d\'engagement envers l\'innovation technologique en Afrique. Cette plateforme d\'interopérabilité complète est conçue pour répondre aux défis uniques du continent africain tout en respectant les standards internationaux les plus élevés.',
          paragraphs: [
            'Notre solution d\'interopérabilité numérique en santé pour l\'Afrique se distingue par sa capacité à intégrer harmonieusement les systèmes de santé existants tout en préparant l\'infrastructure pour les innovations futures. Elle utilise les standards HL7 FHIR les plus récents pour assurer une compatibilité maximale avec les systèmes internationaux, tout en s\'adaptant aux spécificités locales du marché africain.',
            'La plateforme intègre des modules spécialisés pour la gestion des dossiers médicaux électroniques (DME), la télémédecine, la gestion des pharmacies, et le suivi des patients. Chaque module est conçu pour fonctionner de manière autonome ou en intégration complète, offrant ainsi une flexibilité maximale aux établissements de santé de toutes tailles.',
            'Notre approche de sécurité est multi-niveaux, combinant chiffrement de bout en bout, authentification biométrique, et conformité aux réglementations locales et internationales (RGPD, HIPAA, etc.). La solution inclut également des outils d\'audit avancés pour garantir la traçabilité complète de toutes les interactions avec les données de santé.',
            'L\'architecture cloud-native de notre solution garantit une scalabilité illimitée et une disponibilité de 99.9%, essentielles pour les environnements de santé critiques. Les API ouvertes permettent une intégration facile avec les systèmes existants et les applications tierces, facilitant ainsi l\'adoption progressive de la solution.',
            'Notre engagement envers l\'Afrique se traduit par un support technique localisé, une formation continue des équipes, et un développement continu adapté aux besoins spécifiques du continent. La solution est conçue pour être accessible même dans les régions avec une connectivité limitée, grâce à des fonctionnalités de synchronisation hors ligne.'
          ]
        }
      },
      team: {
        title: 'Notre Équipe',
        description: 'Une équipe d\'experts passionnés par l\'innovation en santé.'
      },
      keynotes: {
        title: 'Keynotes et Conférences',
        description: 'Découvrez nos interventions lors d\'événements internationaux majeurs.'
      },
      events: {
        title: 'Événements',
        description: 'Découvrez les événements majeurs où The Blue Healthtech a participé et contribué à l\'innovation en santé numérique.',
        upcoming: 'Événements à venir',
        past: 'Événements passés'
      },
      news: {
        title: 'Actualités',
        description: 'Restez informé des dernières nouvelles, innovations et développements de The Blue Healthtech dans le domaine de la santé numérique.',
        readMore: 'Lire la suite',
        publishedOn: 'Publié le'
      },


      academy: {
        title: 'Digital Health Academy',
        subtitle: 'Plateforme e-Learning Innovante pour la Formation en Santé Numérique',
        description: 'Notre Digital Health Academy est une plateforme e-learning complète et interactive, conçue pour former les futurs experts de la santé numérique. Elle combine un système de gestion de contenu (CMS) sophistiqué avec des outils d\'apprentissage avancés pour offrir une expérience éducative de pointe.',
        platform: {
          title: 'Plateforme e-Learning Intégrée',
          subtitle: 'Interface intuitive avec CMS avancé',
          description: 'Une plateforme moderne et intuitive conçue pour offrir une expérience d\'apprentissage exceptionnelle. Notre interface responsive s\'adapte à tous les appareils et propose une navigation fluide et intuitive.',
          features: [
            {
              title: 'Interface Responsive',
              description: 'Design adaptatif qui s\'optimise automatiquement pour ordinateurs, tablettes et smartphones'
            },
            {
              title: 'Navigation Intuitive',
              description: 'Menu intelligent et recherche avancée pour accéder rapidement au contenu souhaité'
            },
            {
              title: 'Tableau de Bord Personnalisé',
              description: 'Vue d\'ensemble personnalisée avec progression, notifications et recommandations'
            },
            {
              title: 'Système de Notifications',
              description: 'Alertes intelligentes pour les nouveaux cours, échéances et événements en direct'
            },
            {
              title: 'Mode Hors Ligne',
              description: 'Téléchargement de contenu pour apprentissage sans connexion internet'
            },
            {
              title: 'Accessibilité Universelle',
              description: 'Conformité WCAG 2.1 avec support lecteur d\'écran et navigation clavier'
            }
          ]
        },
        content: {
          title: 'Contenus et Ressources Multimédia',
          subtitle: 'Vidéos HD, présentations interactives, webinaires en direct',
          description: 'Une bibliothèque riche de contenus multimédia de haute qualité, conçus pour maximiser l\'engagement et faciliter l\'apprentissage.',
          features: [
            {
              title: 'Vidéos HD 4K',
              description: 'Contenus vidéo haute définition avec sous-titres automatiques multilingues'
            },
            {
              title: 'Présentations Interactives',
              description: 'Slides dynamiques avec animations 3D, quiz intégrés et navigation non-linéaire'
            },
            {
              title: 'Webinaires en Direct',
              description: 'Sessions live avec interaction temps réel, chat et partage d\'écran'
            },
            {
              title: 'Podcasts Spécialisés',
              description: 'Contenus audio de qualité studio avec transcriptions et notes de cours'
            },
            {
              title: 'Simulations Virtuelles',
              description: 'Environnements 3D immersifs pour la pratique de cas réels'
            },
            {
              title: 'Bibliothèque de Ressources',
              description: 'Base de données complète avec e-books, articles, templates et outils'
            }
          ]
        },
        courses: {
          title: 'Programmes de Formation Certifiants',
          subtitle: '5 programmes de différents niveaux',
          description: 'Des parcours de formation structurés et certifiants, conçus par des experts du domaine pour répondre aux besoins spécifiques de chaque niveau de compétence.',
          programs: [
            {
              name: 'Fondamentaux de la Santé Numérique',
              duration: '6 semaines',
              level: 'Débutant',
              description: 'Introduction aux concepts clés, standards internationaux et enjeux de la transformation numérique en santé.',
              modules: [
                'Introduction à la santé numérique',
                'Standards et normes internationales',
                'Enjeux éthiques et réglementaires',
                'Technologies émergentes en santé',
                'Cas pratiques et études de cas',
                'Évaluation finale et certification'
              ],
              skills: ['Compréhension des concepts de base', 'Maîtrise des standards', 'Awareness des enjeux éthiques']
            },
            {
              name: 'Intelligence Artificielle en Santé',
              duration: '8 semaines',
              level: 'Intermédiaire',
              description: 'Applications de l\'IA, machine learning, analyse prédictive et éthique en santé numérique.',
              modules: [
                'Fondamentaux de l\'IA en santé',
                'Machine Learning et Deep Learning',
                'Analyse prédictive et diagnostic assisté',
                'Éthique et responsabilité de l\'IA',
                'Implémentation pratique',
                'Évaluation et validation',
                'Projet final et certification'
              ],
              skills: ['Développement d\'algorithmes IA', 'Analyse de données médicales', 'Éthique de l\'IA']
            },
            {
              name: 'Interopérabilité et Standards HL7 FHIR',
              duration: '10 semaines',
              level: 'Avancé',
              description: 'Maîtrise des standards d\'interopérabilité, intégration de systèmes et architecture de données.',
              modules: [
                'Architecture des systèmes de santé',
                'Standards HL7 v2 et v3',
                'HL7 FHIR - Concepts avancés',
                'Intégration de systèmes',
                'Sécurité et authentification',
                'Tests et validation',
                'Déploiement et maintenance',
                'Projet d\'intégration complet'
              ],
              skills: ['Architecture FHIR', 'Intégration de systèmes', 'Gestion de projets d\'interopérabilité']
            },
            {
              name: 'Cybersécurité et Protection des Données',
              duration: '6 semaines',
              level: 'Intermédiaire',
              description: 'Sécurité des systèmes de santé, conformité RGPD et bonnes pratiques de protection.',
              modules: [
                'Fondamentaux de la cybersécurité',
                'Réglementations et conformité',
                'Protection des données de santé',
                'Gestion des incidents de sécurité',
                'Audit et monitoring',
                'Certification finale'
              ],
              skills: ['Sécurisation des systèmes', 'Conformité réglementaire', 'Gestion des risques']
            },
            {
              name: 'Gestion de Projets e-Santé',
              duration: '8 semaines',
              level: 'Avancé',
              description: 'Planification, pilotage et évaluation de projets de transformation numérique en santé.',
              modules: [
                'Méthodologies de gestion de projet',
                'Planification stratégique',
                'Gestion des parties prenantes',
                'Gestion des risques et qualité',
                'Pilotage et reporting',
                'Évaluation et ROI',
                'Projet de transformation complet'
              ],
              skills: ['Gestion de projet complexe', 'Stratégie de transformation', 'Évaluation de performance']
            }
          ]
        },
        cms: {
          title: 'Système de Gestion de Contenu (CMS)',
          subtitle: 'Éditeur WYSIWYG, workflow d\'approbation',
          description: 'Un CMS puissant et flexible conçu spécifiquement pour la création et la gestion de contenu éducatif de haute qualité.',
          features: [
            {
              title: 'Éditeur WYSIWYG Avancé',
              description: 'Interface de création intuitive avec prévisualisation en temps réel et outils de formatage avancés'
            },
            {
              title: 'Gestion des Médias',
              description: 'Bibliothèque centralisée avec support pour images, vidéos, documents et ressources interactives'
            },
            {
              title: 'Workflow d\'Approbation',
              description: 'Processus de validation multi-niveaux avec notifications et suivi des modifications'
            },
            {
              title: 'Versioning et Historique',
              description: 'Contrôle de version complet avec possibilité de restauration et comparaison des versions'
            },
            {
              title: 'Templates Personnalisables',
              description: 'Modèles de cours et de contenu réutilisables avec personnalisation avancée'
            },
            {
              title: 'Intégration API',
              description: 'Connecteurs pour systèmes externes, outils de création et plateformes tierces'
            }
          ]
        },
        live: {
          title: 'Diffusion en Direct et Interactivité',
          subtitle: 'Webinaires HD, salles virtuelles, interaction temps réel',
          description: 'Des outils de diffusion en direct de pointe pour créer des expériences d\'apprentissage collaboratives et engageantes.',
          features: [
            {
              title: 'Webinaires HD Ultra',
              description: 'Diffusion en 4K avec support multi-caméras et streaming adaptatif'
            },
            {
              title: 'Salles Virtuelles',
              description: 'Environnements 3D immersifs pour l\'apprentissage collaboratif'
            },
            {
              title: 'Interaction Temps Réel',
              description: 'Chat, sondages, questions-réponses et partage d\'écran intégrés'
            },
            {
              title: 'Tableau Blanc Virtuel',
              description: 'Outils de collaboration avec annotations, dessins et partage de documents'
            },
            {
              title: 'Enregistrement Automatique',
              description: 'Capture HD des sessions avec indexation automatique du contenu'
            },
            {
              title: 'Analytics en Direct',
              description: 'Métriques d\'engagement et de participation en temps réel'
            }
          ]
        }
      },

      contact: {
        title: 'Contactez-nous',
        description: 'Prêt à transformer votre système de santé ? Contactez-nous dès aujourd\'hui.',
        form: {
          name: 'Nom complet',
          email: 'Adresse email',
          message: 'Message',
          submit: 'Envoyer le message'
        }
      },
      footer: {
        rights: '© 2024 The Blue Healthtech. Tous droits réservés.',
        privacy: 'Politique de confidentialité',
        terms: 'Conditions d\'utilisation'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        solutions: 'Solutions',
        team: 'Team',
        events: 'Events',
        news: 'News',
        contact: 'Contact'
      },
      hero: {
        title: 'The Blue Healthtech',
        subtitle: 'Digital Transformation for Health Equity',
        description: 'We develop innovative solutions to improve access to healthcare and promote health equity worldwide.',
        cta: 'Schedule a Call'
      },
      about: {
        title: 'About Us',
        description: 'The Blue Healthtech is an innovative company specialized in the digital transformation of the healthcare sector. Our mission is to democratize access to quality healthcare through advanced technologies.',
        vision: 'Our Vision',
        visionText: 'A world where every individual, regardless of their geographical location or socioeconomic status, has access to quality healthcare.',
        mission: 'Our Mission',
        missionText: 'Develop and deploy innovative technological solutions that improve the efficiency, accessibility, and equity of healthcare systems.'
      },
      solutions: {
        title: 'Our Solutions',
        description: 'We offer a comprehensive range of digital solutions to modernize the healthcare sector.',
        items: [
          {
            title: 'Telemedicine Platform',
            description: 'Connect patients with healthcare professionals in real-time, wherever they are.'
          },
          {
            title: 'Health Data Management',
            description: 'Secure solutions for collecting, analyzing, and sharing medical data.'
          },
          {
            title: 'Artificial Intelligence',
            description: 'AI algorithms for early diagnosis and disease prevention.'
          },
          {
            title: 'Mobile Health',
            description: 'Mobile applications for health monitoring and prevention.'
          }
        ],
        featuredProduct: {
          title: 'Featured Product',
          subtitle: 'Football Health Predictor',
          description: 'Football Health Predictor revolutionizes modern football management through a comprehensive, intuitive, AI-driven SaaS platform. Designed to meet the growing needs of clubs, federations, and academies, Football Health Predictor centralizes and automates all essential processes: from player registration with FIFA ID integration to document management, competition organization, performance tracking, and internal communication.',
          features: [
            'Secure and comprehensive player data collection',
            'Digital management of official documents',
            'Automated notification sending for compliance',
            'Advanced medical monitoring and workload analysis tools',
            'AI-powered injury prevention',
            'Intelligent medical assistant for automatic documentation',
            'AI alerts to anticipate injury risks',
            'Personalized training and recovery plans',
            'Competition organization with automated planning',
            'Multi-tenant architecture for all organization sizes'
          ]
        },
        flagshipProduct: {
          title: 'Flagship Product',
          subtitle: 'Digital Health Interoperability Solution for Africa',
          description: 'Our flagship solution represents the culmination of over two decades of digital health expertise and commitment to technological innovation in Africa. This comprehensive interoperability platform is designed to address the unique challenges of the African continent while adhering to the highest international standards.',
          paragraphs: [
            'Our digital health interoperability solution for Africa stands out for its ability to seamlessly integrate existing health systems while preparing the infrastructure for future innovations. It uses the latest HL7 FHIR standards to ensure maximum compatibility with international systems while adapting to the local specificities of the African market.',
            'The platform integrates specialized modules for electronic medical records (EMR) management, telemedicine, pharmacy management, and patient monitoring. Each module is designed to operate autonomously or in full integration, offering maximum flexibility to health facilities of all sizes.',
            'Our security approach is multi-layered, combining end-to-end encryption, biometric authentication, and compliance with local and international regulations (GDPR, HIPAA, etc.). The solution also includes advanced audit tools to ensure complete traceability of all interactions with health data.',
            'The cloud-native architecture of our solution guarantees unlimited scalability and 99.9% availability, essential for critical health environments. Open APIs enable easy integration with existing systems and third-party applications, facilitating the progressive adoption of the solution.',
            'Our commitment to Africa translates into localized technical support, continuous team training, and ongoing development adapted to the specific needs of the continent. The solution is designed to be accessible even in regions with limited connectivity, thanks to offline synchronization features.'
          ]
        }
      },
      team: {
        title: 'Our Team',
        description: 'A team of experts passionate about health innovation.'
      },
      keynotes: {
        title: 'Keynotes and Conferences',
        description: 'Discover our interventions at major international events.'
      },
      events: {
        title: 'Events',
        description: 'Discover the major events where The Blue Healthtech has participated and contributed to digital health innovation.',
        upcoming: 'Upcoming Events',
        past: 'Past Events'
      },
      news: {
        title: 'News',
        description: 'Stay informed about the latest news, innovations, and developments from The Blue Healthtech in the digital health sector.',
        readMore: 'Read More',
        publishedOn: 'Published on'
      },


      academy: {
        title: 'Digital Health Academy',
        subtitle: 'Innovative e-Learning Platform for Digital Health Training',
        description: 'Our Digital Health Academy is a comprehensive and interactive e-learning platform designed to train future digital health experts. It combines a sophisticated content management system (CMS) with advanced learning tools to deliver a cutting-edge educational experience.',
        platform: {
          title: 'Integrated e-Learning Platform',
          subtitle: 'Intuitive interface with advanced CMS',
          description: 'A modern and intuitive platform designed to deliver an exceptional learning experience. Our responsive interface adapts to all devices and offers smooth and intuitive navigation.',
          features: [
            {
              title: 'Responsive Interface',
              description: 'Adaptive design that automatically optimizes for computers, tablets, and smartphones'
            },
            {
              title: 'Intuitive Navigation',
              description: 'Smart menu and advanced search to quickly access desired content'
            },
            {
              title: 'Personalized Dashboard',
              description: 'Customized overview with progress, notifications, and recommendations'
            },
            {
              title: 'Notification System',
              description: 'Smart alerts for new courses, deadlines, and live events'
            },
            {
              title: 'Offline Mode',
              description: 'Content download for learning without internet connection'
            },
            {
              title: 'Universal Accessibility',
              description: 'WCAG 2.1 compliance with screen reader support and keyboard navigation'
            }
          ]
        },
        content: {
          title: 'Multimedia Content and Resources',
          subtitle: 'HD videos, interactive presentations, live webinars',
          description: 'A rich library of high-quality multimedia content designed to maximize engagement and facilitate learning.',
          features: [
            {
              title: '4K HD Videos',
              description: 'High-definition video content with automatic multilingual subtitles'
            },
            {
              title: 'Interactive Presentations',
              description: 'Dynamic slides with 3D animations, integrated quizzes, and non-linear navigation'
            },
            {
              title: 'Live Webinars',
              description: 'Live sessions with real-time interaction, chat, and screen sharing'
            },
            {
              title: 'Specialized Podcasts',
              description: 'Studio-quality audio content with transcripts and course notes'
            },
            {
              title: 'Virtual Simulations',
              description: 'Immersive 3D environments for real case practice'
            },
            {
              title: 'Resource Library',
              description: 'Comprehensive database with e-books, articles, templates, and tools'
            }
          ]
        },
        courses: {
          title: 'Certified Training Programs',
          subtitle: '5 programs of different levels',
          description: 'Structured and certified training paths designed by domain experts to meet the specific needs of each competency level.',
          programs: [
            {
              name: 'Digital Health Fundamentals',
              duration: '6 weeks',
              level: 'Beginner',
              description: 'Introduction to key concepts, international standards, and challenges of digital transformation in healthcare.',
              modules: [
                'Introduction to digital health',
                'International standards and norms',
                'Ethical and regulatory issues',
                'Emerging technologies in healthcare',
                'Practical cases and case studies',
                'Final evaluation and certification'
              ],
              skills: ['Understanding of basic concepts', 'Mastery of standards', 'Awareness of ethical issues']
            },
            {
              name: 'Artificial Intelligence in Healthcare',
              duration: '8 weeks',
              level: 'Intermediate',
              description: 'AI applications, machine learning, predictive analytics, and ethics in digital health.',
              modules: [
                'AI fundamentals in healthcare',
                'Machine Learning and Deep Learning',
                'Predictive analytics and assisted diagnosis',
                'AI ethics and responsibility',
                'Practical implementation',
                'Evaluation and validation',
                'Final project and certification'
              ],
              skills: ['AI algorithm development', 'Medical data analysis', 'AI ethics']
            },
            {
              name: 'Interoperability and HL7 FHIR Standards',
              duration: '10 weeks',
              level: 'Advanced',
              description: 'Mastery of interoperability standards, system integration, and data architecture.',
              modules: [
                'Healthcare systems architecture',
                'HL7 v2 and v3 standards',
                'HL7 FHIR - Advanced concepts',
                'System integration',
                'Security and authentication',
                'Testing and validation',
                'Deployment and maintenance',
                'Complete integration project'
              ],
              skills: ['FHIR architecture', 'System integration', 'Interoperability project management']
            },
            {
              name: 'Cybersecurity and Data Protection',
              duration: '6 weeks',
              level: 'Intermediate',
              description: 'Healthcare system security, GDPR compliance, and protection best practices.',
              modules: [
                'Cybersecurity fundamentals',
                'Regulations and compliance',
                'Health data protection',
                'Security incident management',
                'Audit and monitoring',
                'Final certification'
              ],
              skills: ['System security', 'Regulatory compliance', 'Risk management']
            },
            {
              name: 'e-Health Project Management',
              duration: '8 weeks',
              level: 'Advanced',
              description: 'Planning, steering, and evaluation of digital transformation projects in healthcare.',
              modules: [
                'Project management methodologies',
                'Strategic planning',
                'Stakeholder management',
                'Risk and quality management',
                'Steering and reporting',
                'Evaluation and ROI',
                'Complete transformation project'
              ],
              skills: ['Complex project management', 'Transformation strategy', 'Performance evaluation']
            }
          ]
        },
        cms: {
          title: 'Content Management System (CMS)',
          subtitle: 'WYSIWYG editor, approval workflow',
          description: 'A powerful and flexible CMS specifically designed for creating and managing high-quality educational content.',
          features: [
            {
              title: 'Advanced WYSIWYG Editor',
              description: 'Intuitive creation interface with real-time preview and advanced formatting tools'
            },
            {
              title: 'Media Management',
              description: 'Centralized library with support for images, videos, documents, and interactive resources'
            },
            {
              title: 'Approval Workflow',
              description: 'Multi-level validation process with notifications and modification tracking'
            },
            {
              title: 'Versioning and History',
              description: 'Complete version control with restoration and version comparison capabilities'
            },
            {
              title: 'Customizable Templates',
              description: 'Reusable course and content templates with advanced customization'
            },
            {
              title: 'API Integration',
              description: 'Connectors for external systems, creation tools, and third-party platforms'
            }
          ]
        },
        live: {
          title: 'Live Streaming and Interactivity',
          subtitle: 'HD webinars, virtual rooms, real-time interaction',
          description: 'State-of-the-art live streaming tools to create collaborative and engaging learning experiences.',
          features: [
            {
              title: 'Ultra HD Webinars',
              description: '4K streaming with multi-camera support and adaptive streaming'
            },
            {
              title: 'Virtual Rooms',
              description: 'Immersive 3D environments for collaborative learning'
            },
            {
              title: 'Real-Time Interaction',
              description: 'Integrated chat, polls, Q&A, and screen sharing'
            },
            {
              title: 'Virtual Whiteboard',
              description: 'Collaboration tools with annotations, drawings, and document sharing'
            },
            {
              title: 'Automatic Recording',
              description: 'HD session capture with automatic content indexing'
            },
            {
              title: 'Live Analytics',
              description: 'Real-time engagement and participation metrics'
            }
          ]
        }
      },

      contact: {
        title: 'Contact Us',
        description: 'Ready to transform your healthcare system? Contact us today.',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          message: 'Message',
          submit: 'Send Message'
        }
      },
      footer: {
        rights: '© 2024 The Blue Healthtech. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    }
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert(language === 'fr' ? 'Message envoyé avec succès!' : 'Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const events = [
    {
      title: 'HTDC Digital Health & Telemedicine Panel - IPH2025',
      date: '9 Juillet 2025',
      location: 'En ligne / Online',
      description: {
        fr: 'Panel sur la santé numérique et la télémédecine organisé par HTDC dans le cadre d\'IPH2025. Plus de 60 hôpitaux, centres médicaux et facilitateurs ont participé à cette session mondiale de collaboration et de partage de connaissances.',
        en: 'Digital Health & Telemedicine Panel organized by HTDC as part of IPH2025. Over 60 hospitals, medical centers, and facilitators participated in this global session for collaboration and knowledge-sharing.'
      },
      link: 'https://www.linkedin.com/posts/health-tourism-development-center-of-islamic-countries_htdc-digitalhealth-telemedicine-activity-7349002961034915840-eLT3?utm_source=share&utm_medium=member_android&rcm=ACoAAC7AOJ4B6SDKT1jOjKNu4GYv_wbOFFuF58U',
      type: 'past'
    },
    {
      title: 'HIMSS Europe 2025',
      date: '10-12 Juin 2025',
      location: 'Paris, France',
      description: {
        fr: 'Participation à la conférence européenne HIMSS, présentant nos solutions d\'interopérabilité en santé numérique et nos innovations technologiques pour le marché européen.',
        en: 'Participation in the European HIMSS conference, showcasing our digital health interoperability solutions and technological innovations for the European market.'
      },
      link: 'https://www.himss.org/europe',
      type: 'past'
    },
    {
      title: 'Arab Health 2026',
      date: 'Janvier 2026',
      location: 'Dubai, UAE',
      description: {
        fr: 'Participation au plus grand salon de santé du Moyen-Orient, présentant nos solutions d\'innovation en santé numérique et nos partenariats stratégiques.',
        en: 'Participation in the largest healthcare exhibition in the Middle East, showcasing our digital health innovation solutions and strategic partnerships.'
      },
      link: 'https://www.arabhealthonline.com',
      type: 'upcoming'
    },
    {
      title: 'HIMSS Global Health Conference & Exhibition',
      date: 'Avril 2026',
      location: 'Orlando, USA',
      description: {
        fr: 'Participation à la plus grande conférence mondiale sur les technologies de l\'information en santé.',
        en: 'Participation in the world\'s largest healthcare IT conference.'
      },
      link: 'https://www.himss.org/global-conference',
      type: 'upcoming'
    },
    {
      title: 'International eHealth Forum 2025',
      date: 'Novembre 2025',
      location: 'Maroc',
      description: {
        fr: 'Participation au Forum International eHealth 2025, présentant nos solutions d\'innovation en santé numérique et nos technologies d\'interopérabilité pour le marché africain.',
        en: 'Participation in the International eHealth Forum 2025, showcasing our digital health innovation solutions and interoperability technologies for the African market.'
      },
      link: 'https://www.iehealthf.ma/',
      type: 'upcoming'
    },
    {
      title: 'HELINA 2025',
      date: 'Août 2025',
      location: 'Afrique',
      description: {
        fr: 'Participation à la conférence HELINA 2025, présentant nos solutions d\'interopérabilité en santé numérique et nos innovations technologiques pour le développement de la santé numérique en Afrique.',
        en: 'Participation in HELINA 2025 conference, showcasing our digital health interoperability solutions and technological innovations for digital health development in Africa.'
      },
      link: 'https://helina.africa/helina-2025/',
      type: 'upcoming'
    },
    {
      title: 'GITEX Africa 2025',
      date: '2025',
      location: 'Maroc',
      description: {
        fr: 'Participation au plus grand salon technologique d\'Afrique, présentant nos innovations en santé numérique et nos solutions d\'interopérabilité pour le marché africain.',
        en: 'Participation in Africa\'s largest technology exhibition, showcasing our digital health innovations and interoperability solutions for the African market.'
      },
      link: 'https://www.gitexafrica.com',
      type: 'past'
    },
    {
      title: 'ICT Africa Summit 2026',
      date: '21-23 Avril 2026',
      location: 'Alger, Algérie',
      description: {
        fr: 'Participation au plus grand événement tech d\'Afrique, présentant nos solutions d\'innovation en santé numérique et nos technologies d\'interopérabilité dans le cadre du Forum Health & Pharma.',
        en: 'Participation in Africa\'s largest tech event, showcasing our digital health innovation solutions and interoperability technologies as part of the Health & Pharma Forum.'
      },
      link: 'https://ictafricasummit.com/',
      type: 'upcoming'
    },
    {
      title: 'Digital Health Summit 2024',
      date: 'Décembre 2024',
      location: 'Dubai, UAE',
      description: {
        fr: 'Conférence sur l\'innovation en santé numérique et l\'IA en médecine.',
        en: 'Conference on digital health innovation and AI in medicine.'
      },
      link: 'https://digitalhealthsummit.ae',
      type: 'past'
    },
    {
      title: 'Africa Health Tech Summit',
      date: 'Novembre 2024',
      location: 'Nairobi, Kenya',
      description: {
        fr: 'Sommet dédié aux technologies de santé en Afrique et aux solutions d\'interopérabilité.',
        en: 'Summit dedicated to health technologies in Africa and interoperability solutions.'
      },
      link: 'https://africahealthtechsummit.com',
      type: 'past'
    }
  ];

  const newsArticles = [
    {
      title: {
        fr: 'The Blue Healthtech lance sa nouvelle plateforme d\'interopérabilité en santé numérique',
        en: 'The Blue Healthtech launches its new digital health interoperability platform'
      },
      excerpt: {
        fr: 'Nous sommes fiers d\'annoncer le lancement de notre plateforme d\'interopérabilité révolutionnaire, conçue spécifiquement pour répondre aux défis uniques du secteur de la santé en Afrique.',
        en: 'We are proud to announce the launch of our revolutionary interoperability platform, specifically designed to address the unique challenges of the healthcare sector in Africa.'
      },
      content: {
        fr: 'Cette nouvelle plateforme représente l\'aboutissement de plus de deux décennies d\'expertise en santé numérique. Elle utilise les standards HL7 FHIR les plus récents pour assurer une compatibilité maximale avec les systèmes internationaux, tout en s\'adaptant aux spécificités locales du marché africain.',
        en: 'This new platform represents the culmination of over two decades of digital health expertise. It uses the latest HL7 FHIR standards to ensure maximum compatibility with international systems while adapting to the local specificities of the African market.'
      },
      date: '15 Janvier 2025',
      category: {
        fr: 'Innovation',
        en: 'Innovation'
      },
      image: '/assets/logo_the_blue_healthtech.jpg'
    },
    {
      title: {
        fr: 'Football Health Predictor : Révolution dans la gestion du football moderne',
        en: 'Football Health Predictor: Revolution in modern football management'
      },
      excerpt: {
        fr: 'Notre solution Football Health Predictor continue de révolutionner la gestion du football moderne avec de nouvelles fonctionnalités basées sur l\'intelligence artificielle.',
        en: 'Our Football Health Predictor solution continues to revolutionize modern football management with new AI-powered features.'
      },
      content: {
        fr: 'La dernière mise à jour de Football Health Predictor introduit des algorithmes d\'IA avancés pour la prévention des blessures et l\'optimisation des performances. Cette innovation permet aux clubs et fédérations d\'améliorer significativement la sécurité et la performance de leurs athlètes.',
        en: 'The latest update to Football Health Predictor introduces advanced AI algorithms for injury prevention and performance optimization. This innovation allows clubs and federations to significantly improve the safety and performance of their athletes.'
      },
      date: '8 Janvier 2025',
      category: {
        fr: 'Produit',
        en: 'Product'
      },
      image: '/assets/Football Health Predictor1.jpg'
    },
    {
      title: {
        fr: 'The Blue Healthtech participe au Forum International eHealth 2025',
        en: 'The Blue Healthtech participates in the International eHealth Forum 2025'
      },
      excerpt: {
        fr: 'Nous sommes ravis d\'annoncer notre participation au Forum International eHealth 2025, où nous présenterons nos dernières innovations en santé numérique.',
        en: 'We are delighted to announce our participation in the International eHealth Forum 2025, where we will present our latest digital health innovations.'
      },
      content: {
        fr: 'Lors de cet événement majeur, notre équipe présentera nos solutions d\'interopérabilité et nos technologies innovantes pour le marché africain. Ce forum représente une opportunité unique de partager notre expertise et de contribuer au développement de la santé numérique sur le continent.',
        en: 'During this major event, our team will present our interoperability solutions and innovative technologies for the African market. This forum represents a unique opportunity to share our expertise and contribute to the development of digital health on the continent.'
      },
      date: '3 Janvier 2025',
      category: {
        fr: 'Événement',
        en: 'Event'
      },
      image: '/assets/Conf1.jpg'
    },
    {
      title: {
        fr: 'Nouveau partenariat stratégique pour l\'expansion en Afrique',
        en: 'New strategic partnership for African expansion'
      },
      excerpt: {
        fr: 'The Blue Healthtech annonce un nouveau partenariat stratégique pour accélérer son expansion sur le marché africain.',
        en: 'The Blue Healthtech announces a new strategic partnership to accelerate its expansion in the African market.'
      },
      content: {
        fr: 'Ce partenariat nous permettra d\'étendre notre portée et de rendre nos solutions accessibles à un plus grand nombre d\'établissements de santé en Afrique. Nous sommes convaincus que cette collaboration contribuera significativement à l\'amélioration de la qualité des soins sur le continent.',
        en: 'This partnership will allow us to expand our reach and make our solutions accessible to more healthcare facilities in Africa. We are confident that this collaboration will significantly contribute to improving the quality of care on the continent.'
      },
      date: '28 Décembre 2024',
      category: {
        fr: 'Partenariat',
        en: 'Partnership'
      },
      image: '/assets/logo_the_blue_healthtech.jpg'
    }
  ];

  const teamMembers = [
    { 
      name: 'Izhar Mahjoub', 
      role: 'CEO & Founder', 
      image: '/assets/izhar.jpg',
      bio: {
        fr: 'Pionnier de la Santé Numérique, Izhar possède plus de 20 ans d\'expérience en santé numérique et en interopérabilité. Il a été le précurseur de solutions basées sur l\'IA visant à prévenir les blessures et à réduire de manière significative les temps de récupération.',
        en: 'A pioneer in Digital Health, Izhar has over 20 years of experience in digital health and interoperability. He was a forerunner of AI-based solutions to prevent injuries and significantly reduce recovery times.'
      }
    },
    { 
      name: 'Fouad Omri', 
      role: 'CTO', 
      image: '/assets/fouad.jpg',
      bio: {
        fr: 'Expert en Intelligence Artificielle et en Machine Learning, Fouad a piloté de multiples projets de développement logiciel réussis qui ont permis d\'améliorer la sécurité et la performance des athlètes.',
        en: 'An expert in Artificial Intelligence and Machine Learning, Fouad has led multiple successful software development projects that have improved athlete safety and performance.'
      }
    },
    { 
      name: 'Amin Zerguini', 
      role: 'Head of Business Development', 
      image: '/assets/amin.jpg',
      bio: {
        fr: 'Grâce à son expertise en stratégie de marché et en partenariats, Amin a étendu notre portée, rendant nos solutions accessibles à un plus grand nombre d\'athlètes et d\'équipes.',
        en: 'With his expertise in market strategy and partnerships, Amin has expanded our reach, making our solutions accessible to more athletes and teams.'
      }
    },
    { 
      name: 'Dr. ILUNGA KALENGA Oly', 
      role: 'Board Member', 
      image: '/assets/ilunga.jpg',
      bio: {
        fr: 'Médecin, docteur en santé publique et économiste de la santé, le Dr. Ilunga a occupé les postes de directeur médical des Cliniques de l\'Europe en Belgique et de Ministre de la Santé au Congo. Depuis 2019, il axe ses travaux sur la santé numérique et l\'IA en médecine.',
        en: 'Physician, doctor in public health, and health economist, Dr. Ilunga has served as medical director of the Cliniques de l\'Europe in Belgium and as Minister of Health in Congo. Since 2019, he has focused his work on digital health and AI in medicine.'
      }
    },
    { 
      name: 'Karim Chamari', 
      role: 'Sports Scientist', 
      image: '/assets/karim.jpg',
      bio: {
        fr: 'Karim est spécialisé en biomécanique et en prévention des blessures. Il contribue à des recherches de pointe qui sont au cœur de nos stratégies.',
        en: 'Karim specializes in biomechanics and injury prevention. He contributes to cutting-edge research at the heart of our strategies.'
      }
    },
    { 
      name: 'Nevine Makram Labib', 
      role: 'AI and Data Analysis Scientist', 
      image: '/assets/nevin.jpg',
      bio: {
        fr: 'L\'expertise, le réseau et les compétences de Nevine en matière de plaidoyer sont parfaitement alignés avec nos plans d\'expansion. Ses contributions seront déterminantes pour notre croissance en Égypte, un marché clé pour The Blue Healthtech.',
        en: 'Nevine\'s expertise, network, and advocacy skills are perfectly aligned with our expansion plans. Her contributions will be key to our growth in Egypt, a key market for The Blue Healthtech.'
      }
    },
    { 
      name: 'Effa Ettah', 
      role: 'Research and Innovation Specialist', 
      image: '/assets/effa.jpg',
      bio: {
        fr: 'Effa est experte dans la création de collaborations de recherche et d\'innovation entre les universités et l\'industrie. Elle possède une solide expérience dans le secteur de l\'enseignement supérieur et des compétences avérées en négociation, mentorat, consolidation d\'équipe et management.',
        en: 'Effa is an expert in creating research and innovation collaborations between universities and industry. She has solid experience in higher education and proven skills in negotiation, mentoring, team building, and management.'
      }
    },
    { 
      name: 'Maged Iskarous', 
      role: 'Global Public Health Strategist', 
      image: '/assets/maged.jpg',
      bio: {
        fr: 'Pharmacien agréé et stratège accompli, Maged Iskarous possède 18 ans d\'expérience en leadership dans le renforcement des systèmes de santé et la préparation aux épidémies, avec des interventions aux États-Unis, en Égypte et au sein du Conseil de Coopération du Golfe.',
        en: 'A licensed pharmacist and accomplished strategist, Maged Iskarous has 18 years of leadership experience in strengthening health systems and epidemic preparedness, with interventions in the US, Egypt, and the Gulf Cooperation Council.'
      }
    },
    { 
      name: 'Dr. Maged Abdel Azim', 
      role: 'Visionary Economist and Strategist', 
      image: '/assets/magedazim.jpg',
      bio: {
        fr: 'Économiste accompli, Dr. Maged Abdel Azim est titulaire d\'un doctorat et fort de plus de vingt ans d\'expérience dans le milieu universitaire, le leadership et l\'analyse de politiques publiques. Il est un conférencier, auteur et commentateur médiatique influent sur les questions économiques nationales et internationales.',
        en: 'An accomplished economist, Dr. Maged Abdel Azim holds a PhD and has over twenty years of experience in academia, leadership, and public policy analysis. He is a speaker, author, and influential media commentator on national and international economic issues.'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/assets/logo_the_blue_healthtech.jpg"
                alt="The Blue Healthtech Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">{t.nav.home}</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{t.nav.about}</a>
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors">{t.nav.solutions}</a>
              <a href="#academy" className="text-gray-700 hover:text-blue-600 transition-colors">{t.academy.title}</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors">{t.nav.team}</a>
              <a href="#events" className="text-gray-700 hover:text-blue-600 transition-colors">{t.nav.events}</a>
              <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors">{t.nav.news}</a>
              <a href="#keynotes" className="text-gray-700 hover:text-blue-600 transition-colors">Keynotes</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t.nav.contact}</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors"
              >
                {language === 'fr' ? 'EN' : 'FR'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            {t.hero.title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-700 mb-8">
            {t.hero.subtitle}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {t.hero.description}
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t.about.title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t.about.description}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{t.about.vision}</h3>
              <p className="text-gray-700">{t.about.visionText}</p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{t.about.mission}</h3>
              <p className="text-gray-700">{t.about.missionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t.solutions.title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t.solutions.description}</p>
          </div>
          
          {/* Core Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {t.solutions.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Featured Product */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">{t.solutions.featuredProduct.title}</h3>
              <h4 className="text-2xl font-bold text-blue-700 mb-6">{t.solutions.featuredProduct.subtitle}</h4>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t.solutions.featuredProduct.description}
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-blue-900 mb-4">
                      {language === 'fr' ? 'Fonctionnalités clés' : 'Key Features'}
                    </h4>
                    <ul className="space-y-2">
                      {t.solutions.featuredProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/assets/Football Health Predictor1.jpg"
                    alt="Football Health Predictor 1"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="/assets/Football Health Predictor2.jpg"
                    alt="Football Health Predictor 2"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="/assets/Football Health Predictor3.jpg"
                    alt="Football Health Predictor 3"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="/assets/Football Health Predictor4.jpg"
                    alt="Football Health Predictor 4"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg text-blue-900 font-semibold italic">
                  {language === 'fr' 
                    ? 'En choisissant Football Health Predictor, vous bénéficiez d\'une solution innovante, conforme aux réglementations internationales, qui valorise la donnée, optimise la performance collective et individuelle, et garantit la confidentialité de vos informations sensibles.'
                    : 'By choosing Football Health Predictor, you benefit from an innovative solution, compliant with international regulations, that values data, optimizes collective and individual performance, and guarantees the confidentiality of your sensitive information.'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Flagship Product */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">{t.solutions.flagshipProduct.title}</h3>
              <h4 className="text-2xl font-bold text-blue-700 mb-6">{t.solutions.flagshipProduct.subtitle}</h4>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">{t.solutions.flagshipProduct.description}</p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="space-y-6">
                {t.solutions.flagshipProduct.paragraphs.map((paragraph, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Digital Health Academy Section */}
      <section id="academy" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t.academy.title}</h2>
            <h3 className="text-2xl font-bold text-blue-700 mb-6">{t.academy.subtitle}</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t.academy.description}</p>
          </div>

          {/* Platform Overview */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">{t.academy.platform.title}</h3>
              <h4 className="text-xl font-semibold text-blue-700 mb-4">{t.academy.platform.subtitle}</h4>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.academy.platform.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.academy.platform.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 text-2xl">💻</span>
                    </div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content and Resources */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">{t.academy.content.title}</h3>
              <h4 className="text-xl font-semibold text-blue-700 mb-4">{t.academy.content.subtitle}</h4>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.academy.content.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.academy.content.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 text-2xl">🎥</span>
                    </div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Programs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">{t.academy.courses.title}</h3>
              <h4 className="text-xl font-semibold text-blue-700 mb-4">{t.academy.courses.subtitle}</h4>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.academy.courses.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.academy.courses.programs.map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-blue-900 mb-2">{program.name}</h4>
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {program.duration}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {program.level}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{program.description}</p>
                    
                    {/* Modules */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-blue-800 mb-2">
                        {language === 'fr' ? 'Modules inclus :' : 'Included modules:'}
                      </h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {program.modules.slice(0, 3).map((module, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-1">•</span>
                            <span>{module}</span>
                          </li>
                        ))}
                        {program.modules.length > 3 && (
                          <li className="text-blue-600 font-medium">
                            +{program.modules.length - 3} {language === 'fr' ? 'modules supplémentaires' : 'more modules'}
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="text-sm font-semibold text-blue-800 mb-2">
                        {language === 'fr' ? 'Compétences acquises :' : 'Skills acquired:'}
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {program.skills.map((skill, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Live Streaming Features */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">{t.academy.live.title}</h3>
              <h4 className="text-xl font-semibold text-blue-700 mb-4">{t.academy.live.subtitle}</h4>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.academy.live.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.academy.live.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-600 text-2xl">🔴</span>
                    </div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {language === 'fr' ? 'Prêt à rejoindre la Digital Health Academy ?' : 'Ready to join the Digital Health Academy?'}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {language === 'fr' 
                  ? 'Découvrez nos programmes de formation certifiants et commencez votre parcours vers l\'excellence en santé numérique.'
                  : 'Discover our certified training programs and start your journey towards excellence in digital health.'
                }
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {language === 'fr' ? 'Découvrir les programmes' : 'Discover Programs'}
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t.team.title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t.team.description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {member.bio[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keynotes Section */}
      <section id="keynotes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t.keynotes.title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t.keynotes.description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/assets/Conf1.jpg"
                alt="Conférence 1"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/assets/Conf2.jpg"
                alt="Conférence 2"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/assets/Conf3.jpg"
                alt="Conférence 3"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/assets/Conf4.jpg"
                alt="Conférence 4"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/assets/Conf5.jpg"
                alt="Conférence 5"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src="/assets/Conf7.jpg"
                alt="Conférence 7"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t.events.title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t.events.description}</p>
          </div>
          
          {/* Upcoming Events */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">{t.events.upcoming}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {events.filter(event => event.type === 'upcoming').map((event, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-blue-900">{event.title}</h4>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-blue-700 font-semibold mb-3">{event.location}</p>
                  <p className="text-gray-700 mb-4">{event.description[language]}</p>
                  <a 
                    href={event.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    En savoir plus
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">{t.events.past}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {events.filter(event => event.type === 'past').map((event, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                    <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-gray-600 font-semibold mb-3">{event.location}</p>
                  <p className="text-gray-700 mb-4">{event.description[language]}</p>
                  <a 
                    href={event.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-800 font-semibold transition-colors"
                  >
                    {language === 'fr' ? 'Voir les détails' : 'View Details'}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t.news.title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t.news.description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title[language]}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category[language]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{t.news.publishedOn} {article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">
                    {article.title[language]}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt[language]}
                  </p>
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors inline-flex items-center"
                    onClick={() => {
                      // Ici vous pourriez ouvrir un modal ou naviguer vers une page détaillée
                      alert(article.content[language]);
                    }}
                  >
                    {t.news.readMore}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600">{t.contact.description}</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.contact.form.name}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">{t.contact.form.email}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">{t.contact.form.message}</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/assets/logo_the_blue_healthtech.jpg"
                alt="The Blue Healthtech Logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-200 transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-blue-200 transition-colors">{t.footer.terms}</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p className="text-blue-200">{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

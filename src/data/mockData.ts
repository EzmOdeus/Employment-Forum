import { Job, Company, Workshop } from '../types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'مطور واجهة أمامية',
    company: 'شركة تكنولوجيا الإسكندرية',
    location: 'الإسكندرية، مصر',
    description: 'نبحث عن مطور واجهة أمامية مبدع للانضمام إلى فريقنا المتنامي. ستكون مسؤولاً عن تطوير وتحسين واجهات المستخدم لتطبيقاتنا.',
    requirements: [
      'خبرة 2+ سنوات في تطوير الواجهات الأمامية',
      'إتقان JavaScript و React و CSS',
      'فهم قوي لمبادئ UX/UI',
      'شهادة في علوم الحاسب أو مجال ذي صلة'
    ],
    type: 'full-time',
    category: 'تطوير البرمجيات',
    postedAt: '2025-04-10',
    deadline: '2025-05-15',
    logo: 'https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'مدرس تربية فنية',
    company: 'مدارس المستقبل الدولية',
    location: 'القاهرة، مصر',
    description: 'فرصة للعمل كمدرس تربية فنية في مدرسة رائدة. المسؤوليات تشمل تدريس الفنون وتطوير المناهج وتنظيم المعارض الفنية.',
    requirements: [
      'بكالوريوس في التربية الفنية',
      'خبرة 3+ سنوات في التدريس',
      'مهارات تواصل ممتازة',
      'شغف بتطوير المواهب الفنية لدى الطلاب'
    ],
    type: 'full-time',
    category: 'التعليم',
    postedAt: '2025-04-05',
    deadline: '2025-05-10',
    logo: 'https://images.pexels.com/photos/8471732/pexels-photo-8471732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    title: 'أخصائي تغذية',
    company: 'مركز الصحة والتغذية',
    location: 'الإسكندرية، مصر',
    description: 'مطلوب أخصائي تغذية للعمل في مركزنا الصحي. المسؤوليات تشمل تقييم الحالات الغذائية ووضع خطط غذائية مناسبة وتقديم الاستشارات.',
    requirements: [
      'بكالوريوس في التغذية أو علوم الأغذية',
      'خبرة 2+ سنوات في مجال التغذية الصحية',
      'مهارات تواصل ممتازة',
      'القدرة على العمل ضمن فريق متعدد التخصصات'
    ],
    type: 'part-time',
    category: 'الصحة',
    postedAt: '2025-04-12',
    deadline: '2025-05-20',
    logo: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    title: 'مصمم جرافيك',
    company: 'وكالة الإبداع الرقمي',
    location: 'عن بعد',
    description: 'نبحث عن مصمم جرافيك موهوب لإنشاء تصاميم إبداعية لعلاماتنا التجارية. ستعمل على تصميم الهويات البصرية والمواد التسويقية.',
    requirements: [
      'خبرة في استخدام Adobe Creative Suite',
      'معرفة بمبادئ التصميم والألوان والتايبوغرافي',
      'ملف أعمال قوي يعرض مهاراتك',
      'القدرة على الالتزام بالمواعيد النهائية'
    ],
    type: 'contract',
    category: 'التصميم',
    postedAt: '2025-04-15',
    deadline: '2025-05-25',
    logo: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    title: 'متخصص وسائط رقمية',
    company: 'جامعة الإسكندرية',
    location: 'الإسكندرية، مصر',
    description: 'تبحث كلية التربية النوعية عن متخصص وسائط رقمية للانضمام إلى فريق الإعلام الرقمي. المسؤوليات تشمل إنتاج المحتوى الرقمي وإدارة المنصات الاجتماعية.',
    requirements: [
      'شهادة في الإعلام الرقمي أو مجال ذي صلة',
      'خبرة في إنتاج الفيديو والتحرير',
      'معرفة بمنصات التواصل الاجتماعي وتحليلاتها',
      'مهارات كتابة محتوى ممتازة'
    ],
    type: 'full-time',
    category: 'الإعلام الرقمي',
    postedAt: '2025-04-08',
    deadline: '2025-05-18',
    logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const companies: Company[] = [
  {
    id: '1',
    name: 'شركة تكنولوجيا الإسكندرية',
    logo: 'https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'شركة رائدة في مجال تطوير البرمجيات والحلول التكنولوجية المبتكرة',
    industry: 'تكنولوجيا المعلومات',
    website: 'www.alextechcompany.com',
    jobCount: 3
  },
  {
    id: '2',
    name: 'مدارس المستقبل الدولية',
    logo: 'https://images.pexels.com/photos/8471732/pexels-photo-8471732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'مؤسسة تعليمية متميزة تقدم تعليماً عالي الجودة بمعايير دولية',
    industry: 'التعليم',
    website: 'www.futureschools.edu.eg',
    jobCount: 5
  },
  {
    id: '3',
    name: 'مركز الصحة والتغذية',
    logo: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'مركز متخصص في تقديم الاستشارات الغذائية والصحية للأفراد والمؤسسات',
    industry: 'الرعاية الصحية',
    website: 'www.healthnutrition.com',
    jobCount: 2
  },
  {
    id: '4',
    name: 'وكالة الإبداع الرقمي',
    logo: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'وكالة إبداعية متخصصة في التسويق الرقمي وتصميم الهويات البصرية',
    industry: 'التسويق والإعلان',
    website: 'www.digitalcreative.agency',
    jobCount: 4
  },
  {
    id: '5',
    name: 'جامعة الإسكندرية',
    logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'مؤسسة أكاديمية رائدة في مصر تقدم برامج تعليمية متنوعة في مختلف التخصصات',
    industry: 'التعليم العالي',
    website: 'www.alexu.edu.eg',
    jobCount: 8
  }
];

export const workshops: Workshop[] = [
  {
    id: '1',
    title: 'مهارات كتابة السيرة الذاتية',
    description: 'ورشة عمل تفاعلية لتعلم كيفية كتابة سيرة ذاتية احترافية تلفت انتباه أصحاب العمل',
    speaker: 'د. أحمد محمود',
    speakerTitle: 'مستشار التوظيف والتطوير المهني',
    date: '2025-04-28',
    time: '10:00 - 12:00',
    location: 'قاعة المؤتمرات الرئيسية',
    capacity: 50,
    registeredCount: 32,
    image: 'https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'مهارات اجتياز المقابلات الشخصية',
    description: 'تعلم كيفية التحضير للمقابلات الشخصية والإجابة على الأسئلة الصعبة بثقة',
    speaker: 'د. سارة علي',
    speakerTitle: 'أخصائية تطوير مهني',
    date: '2025-04-28',
    time: '13:00 - 15:00',
    location: 'قاعة المحاضرات أ',
    capacity: 40,
    registeredCount: 35,
    image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    title: 'استراتيجيات البحث عن عمل',
    description: 'استكشاف أفضل الطرق للعثور على فرص العمل المناسبة وتقديم طلبات التوظيف بفعالية',
    speaker: 'أ. محمد خالد',
    speakerTitle: 'مدير الموارد البشرية بشركة تكنولوجيا الإسكندرية',
    date: '2025-04-28',
    time: '16:00 - 18:00',
    location: 'قاعة المحاضرات ب',
    capacity: 45,
    registeredCount: 20,
    image: 'https://images.pexels.com/photos/4339458/pexels-photo-4339458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    title: 'التسويق الذاتي في سوق العمل',
    description: 'كيفية بناء علامتك الشخصية وتسويق مهاراتك للحصول على الوظيفة المناسبة',
    speaker: 'أ. نورا حسن',
    speakerTitle: 'مستشارة تطوير مهني',
    date: '2025-04-29',
    time: '10:00 - 12:00',
    location: 'قاعة المؤتمرات الرئيسية',
    capacity: 50,
    registeredCount: 15,
    image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];
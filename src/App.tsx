import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink, 
  Download, 
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  User,
  GraduationCap,
  Briefcase,
  Star,
  Heart,
  Coffee,
  Zap,
  Facebook,
  Instagram,
  Menu,
  X
} from 'lucide-react';
import chatapp from '../public/images/chatapp.jpg';
import ecomMicro from '../public/images/e-com.jpg';
import musicapp from '../public/images/musicapp.jpg';
import cloth from '../public/images/cloth.jpg';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  gitlab?: string;
  demo?: string;
  type: string;
  features: string[];
  image: string;
}

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  icon: string;
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [typedText, setTypedText] = useState<string>('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const roles = [
    'Software Engineering Student',
    'Full Stack Developer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  // Typing animation
  useEffect(() => {
    const typeText = async () => {
      const text = roles[currentRoleIndex];
      // Type out
      for (let i = 0; i <= text.length; i++) {
        setTypedText(text.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      // Wait
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Delete
      for (let i = text.length; i >= 0; i--) {
        setTypedText(text.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    };
    typeText();
  }, [currentRoleIndex]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills: Skill[] = [
    { name: 'React.js', level: 85, category: 'frontend', icon: '⚛️' },
    { name: 'React Native', level: 50, category: 'frontend', icon: '📱' },
    { name: 'TypeScript', level: 75, category: 'frontend', icon: '🔷' },
    { name: 'Vite', level: 80, category: 'tools', icon: '⚡' },
    { name: 'Tailwind CSS', level: 30, category: 'frontend', icon: '🎨' },
    { name: 'Java', level: 85, category: 'backend', icon: '☕' },
    { name: 'Spring Boot', level: 80, category: 'backend', icon: '🍃' },
    { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
    { name: 'Express.js', level: 85, category: 'backend', icon: '🚀' },
    { name: 'MySQL', level: 80, category: 'database', icon: '🐬' },
    { name: 'MongoDB', level: 80, category: 'database', icon: '🍃' },
    { name: 'Docker', level: 60, category: 'tools', icon: '🐳' },
    { name: 'Git', level: 90, category: 'tools', icon: '📋' },
    { name: 'JWT', level: 75, category: 'backend', icon: '🔐' }
  ];

  const projects: Project[] = [
    {
      title: 'Fashion E-Commerce Microservices',
      description: 'Dự án E-Commerce về thời trang sử dụng kiến trúc microservices với các chức năng cốt lõi như quản lý sản phẩm, đơn hàng, thanh toán, và kho.',
      technologies: ['React.js', 'Spring Boot', 'Node.js', 'JWT', 'API Gateway', 'Redis', 'Kafka', 'Docker'],
      gitlab: 'https://gitlab.com/vuongng2212/kttkpm-nhomabc-fashionecommerce',
      type: 'Team Project',
      features: ['Microservices Architecture', 'API Gateway', 'Message Queue', 'Containerization'],
      image: ecomMicro
    },
    {
      title: 'E-commerce Clothing Website',
      description: 'Website thương mại điện tử cho phép người dùng mua sắm quần áo trực tuyến với giỏ hàng, xử lý thanh toán và quản lý đơn hàng.',
      technologies: ['React', 'Vite', 'Spring Boot', 'Hibernate', 'MySQL', 'JWT'],
      gitlab: 'https://gitlab.com/Duy2763/01-springboot',
      type: 'Full Stack Project',
      features: ['Shopping Cart', 'Payment Processing', 'Order Management', 'User Authentication'],
      image: cloth
    },
    {
      title: 'Real-time Chat Application',
      description: 'Ứng dụng chat thời gian thực lấy cảm hứng từ Zalo, hỗ trợ tin nhắn trực tiếp, quản lý nhóm và giao tiếp real-time.',
      technologies: ['React', 'Vite', 'React Native', 'Spring Boot', 'WebSocket', 'JWT'],
      gitlab: 'https://gitlab.com/Duy2763/01-chatapp-springboot.git',
      type: 'Real-time Application',
      features: ['Real-time Messaging', 'Group Management', 'Friend Requests', 'Cross-platform'],
      image: chatapp
    },
    {
      title: 'Music Player App',
      description: 'Ứng dụng nghe nhạc cho phép người dùng tìm kiếm và phát nhạc theo album, bảng xếp hạng và nghệ sĩ.',
      technologies: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
      github: 'https://github.com/Duy2763/Music_App_Backend',
      type: 'Mobile Application',
      features: ['Music Streaming', 'Search by Artist/Album', 'Playlist Management', 'Charts Integration'],
      image: musicapp
    },
    {
      title: 'Bookstore Management System',
      description: 'Ứng dụng quản lý hiệu sách xử lý tồn kho, bán hàng, đơn hàng và doanh thu với giao diện Java Swing.',
      technologies: ['Java Swing', 'JDBC', 'MySQL'],
      github: 'https://github.com/Duy2763/QuanLyHieuSach',
      type: 'Desktop Application',
      features: ['Inventory Management', 'Sales Tracking', 'Customer Data', 'Revenue Reports'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {'<DuyDev />'}
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'home', label: 'Home', icon: <User size={16} /> },
                  { id: 'about', label: 'About', icon: <GraduationCap size={16} /> },
                  { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
                  { id: 'projects', label: 'Projects', icon: <Briefcase size={16} /> },
                  { id: 'contact', label: 'Contact', icon: <Mail size={16} /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-white/10 ${
                      activeSection === item.id ? 'text-cyan-400 bg-cyan-400/10' : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Home', icon: <User size={16} /> },
                { id: 'about', label: 'About', icon: <GraduationCap size={16} /> },
                { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
                { id: 'projects', label: 'Projects', icon: <Briefcase size={16} /> },
                { id: 'contact', label: 'Contact', icon: <Mail size={16} /> }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 w-full text-left px-3 py-2 text-base font-medium transition-all duration-200 rounded-lg ${
                    activeSection === item.id ? 'text-cyan-400 bg-cyan-400/10' : 'text-gray-300 hover:text-cyan-400 hover:bg-white/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-spin">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <img 
                    src="/images/duy-avatar.jpg" 
                    alt="Vũ Duy"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Trần Vũ Duy
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 font-mono">
            <span className="text-gray-300">I'm a </span>
            <span className="text-cyan-400 border-r-2 border-cyan-400 animate-pulse">
              {typedText}
            </span>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Software Engineering student at Industrial University of Ho Chi Minh City. 
            Passionate about building innovative solutions and eager to contribute to real-world projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-400/50 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
                  <User className="mr-3" size={28} />
                  Personal Info
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    As a Software Engineering student, I am eager to gain an internship opportunity 
                    at a company where I can learn and enhance my programming skills. I aspire to 
                    contribute to real-world projects and develop my career in the field of software development.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="text-cyan-400" size={16} />
                      <span>Gò Vấp, Hồ Chí Minh</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="text-cyan-400" size={16} />
                      <div className="sm:whitespace-nowrap">
                        (+84) 933889543 - 817270603
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center">
                  <GraduationCap className="mr-3" size={28} />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Software Engineering</h4>
                    <p className="text-cyan-400">Industrial University of Ho Chi Minh City</p>
                    <p className="text-gray-400">08/2021 - Present • Fourth-year student</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Problem Solving', 'Team Collaboration', 'Quick Learning', 'Attention to Detail'].map((trait) => (
                      <span key={trait} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm border border-cyan-400/30">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="font-semibold text-white mb-3">{skill.name}</h3>
                  <div className="relative w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-1000 ease-out"
                      style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-cyan-500 text-cyan-900 rounded-full text-xs border border-cyan-400/30 font-semibold whitespace-nowrap">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span key={feature} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded text-xs border border-cyan-400/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.gitlab && (
                      <a href={project.gitlab} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors text-sm">
                        <Code size={16} />
                        <span>GitLab</span>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors text-sm">
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg">
              I'm actively seeking internship opportunities and would love to discuss how I can contribute to your team!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Let's Connect!</h3>
              
              <div className="space-y-4">
                <a href="mailto:tduy2706@gmail.com" className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400 text-sm">tduy2706@gmail.com</div>
                  </div>
                </a>
                
                <a href="tel:+84933889543" className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 bg-green-400/10 rounded-lg flex items-center justify-center group-hover:bg-green-400/20 transition-colors">
                    <Phone size={20} className="text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-400 text-sm">(+84) 933889543 - 817270603</div>
                  </div>
                </a>
                
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                  <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-400 text-sm">Gò Vấp, Hồ Chí Minh</div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Connect with me:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://github.com/Duy2763" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                    <Github size={20} className="text-gray-400 group-hover:text-white" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a href="https://gitlab.com/Duy2763" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                    <Code size={20} className="text-gray-400 group-hover:text-white" />
                    <span className="text-sm">GitLab</span>
                  </a>
                  <a href="https://www.facebook.com/share/16AEUKErU4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                    <Facebook size={20} className="text-gray-400 group-hover:text-blue-500" />
                    <span className="text-sm">Facebook</span>
                  </a>
                  <a href="https://www.instagram.com/vuduyy27?igsh=MXN4eGlnZTh4cDZkdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                    <Instagram size={20} className="text-gray-400 group-hover:text-pink-500" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a href="https://www.linkedin.com/in/tr%E1%BA%A7n-v%C5%A9-duy-88b622372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                    <Linkedin size={20} className="text-gray-400 group-hover:text-blue-400" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a href="mailto:tduy2706@gmail.com" className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                    <Mail size={20} className="text-gray-400 group-hover:text-cyan-400" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-400/30">
                <h4 className="text-lg font-bold text-cyan-400 mb-3 flex items-center">
                  <Star className="mr-2" size={20} />
                  Current Status
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span>🎯 Seeking internship opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
                    <span>📚 Fourth-year Software Engineering student</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                    <span>🎓 Expected graduation: 2025</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                    <span>💻 Available for projects and collaborations</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${isVisible.contact ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center">
                  <Coffee className="mr-2" size={24} />
                  Quick Contact
                </h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h4 className="text-lg font-semibold mb-2">Ready to Get Started!</h4>
                    <p className="text-gray-400 text-sm mb-6">
                      I'm excited to discuss internship opportunities and learn from experienced developers.
                      Let's connect and build something amazing together!
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <a href="mailto:tduy2706@gmail.com?subject=Internship%20Opportunity&body=Hi%20Duy,%0A%0AI'm%20interested%20in%20discussing%20an%20internship%20opportunity%20with%20you." 
                       className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-semibold text-center flex items-center justify-center">
                      <Mail className="mr-2" size={20} />
                      Send Email
                    </a>
                    
                    <a href="tel:+84933889543" 
                       className="w-full border-2 border-cyan-400/50 py-3 px-6 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold text-center flex items-center justify-center">
                      <Phone className="mr-2" size={20} />
                      Call Me
                    </a>
                  </div>
                  
                  <div className="text-center pt-4">
                    <p className="text-gray-500 text-sm">
                      💡 Best time to reach me: 9 AM - 6 PM (GMT+7)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Vũ Duy. Built with React, TypeScript & Tailwind CSS
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Duy2763" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://gitlab.com/Duy2763" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Code size={20} />
              </a>
              <a href="https://www.facebook.com/share/16AEUKErU4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/vuduyy27?igsh=MXN4eGlnZTh4cDZkdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/tr%E1%BA%A7n-v%C5%A9-duy-88b622372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:tduy2706@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
              <Zap size={16} />
              <span>Ready for internship opportunities and exciting projects!</span>
              <Star size={16} />
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles - Added to index.css or as inline styles */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        .animate-spin {
          animation: spin 3s linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1e293b;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #22d3ee, #a855f7);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #9333ea);
        }
        
        /* Selection styling */
        ::selection {
          background: rgba(34, 211, 238, 0.3);
          color: white;
        }
        
        /* Focus styles */
        input:focus, textarea:focus, select:focus {
          box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.3);
        }
        
        /* Gradient text animation */
        .bg-clip-text {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        /* Responsive design improvements */
        @media (max-width: 768px) {
          .text-5xl { font-size: 2.5rem; }
          .text-7xl { font-size: 3.5rem; }
          .text-4xl { font-size: 2rem; }
        }
        
        /* Hover effects */
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        
        .hover\\:scale-\\[1\\.02\\]:hover {
          transform: scale(1.02);
        }
        
        /* Loading states */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Glass morphism effect */
        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }
        
        .backdrop-blur-md {
          backdrop-filter: blur(12px);
        }
        
        /* Button hover effects */
        button:hover {
          filter: brightness(1.1);
        }
        
        /* Image hover effects */
        img:hover {
          filter: brightness(1.1);
        }
        
        /* Card hover effects */
        .group:hover .group-hover\\:bg-cyan-400\\/20 {
          background-color: rgba(34, 211, 238, 0.2);
        }
        
        /* Animation delays */
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
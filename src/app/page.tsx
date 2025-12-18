"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "ARCHIFURN E-Ticaret",
    category: "E-Ticaret",
    description:
      "Premium mobilya markalarını tek bir çatı altında toplayan ve bir pazaryeri olan Archifurn'un website tasarımı tarafımızca yapılmıştır. Kullanıcı dostu bir tasarım kullanılmış olup mobil cihazlar için uyumlu bir şekilde geliştirilmiştir.",
    fullDescription:
      "Premium mobilya markalarını tek bir çatı altında toplayan ve bir pazaryeri olan Archifurn'un website tasarımı tarafımızca yapılmıştır. Kullanıcı dostu bir tasarım kullanılmış olup mobil cihazlar için uyumlu bir şekilde geliştirilmiştir.\n\nProje kapsamında modern e-ticaret deneyimi sunulmuş, ürün filtreleme, arama ve karşılaştırma özellikleri eklenmiştir. Responsive tasarım sayesinde tüm cihazlarda mükemmel görüntüleme sağlanmaktadır.",
    images: [
      "/serazio1.jpeg",
      "/serazio2.jpeg",
      "/serazio3.jpeg",
      "/serazio4.jpeg",
      "/serazio5.jpeg",
      "/serazio6.jpeg",
    ],
    tags: ["Web Tasarım", "E-Ticaret", "Responsive"],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "LCW Market",
    category: "E-Ticaret",
    description:
      "Staj süresince geliştirmiş olduğumuz bu e-ticaret sayfasında veritabanı, backend ve frontend tasarımları tarafımızca yapılmış ve LC Waikiki gibi köklü bir firmanın takım liderlerinin onaylarından geçmiş bir projedir.",
    fullDescription:
      "Staj süresince geliştirmiş olduğumuz bu e-ticaret sayfasında veritabanı, backend ve frontend tasarımları tarafımızca yapılmış ve LC Waikiki gibi köklü bir firmanın takım liderlerinin onaylarından geçmiş bir projedir. Proje halen geliştirilmeye devam edilmektedir.\n\nİçerisindeki veriler tamamen göstermelik verilerdir. Kullanıcı deneyimi odaklı tasarım, hızlı yükleme süreleri ve güvenli ödeme altyapısı ile donatılmıştır.",
    images: ["/lcw1.png", "/lcw2.png", "/lcw3.png", "/lcw4.png"],
    tags: ["Full-Stack", "E-Ticaret", "Veritabanı"],
    technologies: ["React", "Express.js", "PostgreSQL", "Redux"],
  },
  {
    id: 3,
    title: "ANTSAPP",
    category: "Mobil Uygulama",
    description:
      "İstanbul Kültür Üniversitesi IKUANTS için hazırladığımız bir rezervasyon uygulamasıdır. Uygulamanın amacı ortak alandan faydalanan girişimcilerin eşit bir şekilde alanı paylaşmaları için rezervasyon aldıkları bir uygulamadır.",
    fullDescription:
      "İstanbul Kültür Üniversitesi IKUANTS için hazırladığımız bir rezervasyon uygulamasıdır. Uygulamanın amacı ortak alandan faydalanan girişimcilerin eşit bir şekilde alanı paylaşmaları için rezervasyon aldıkları bir uygulamadır.\n\nİstanbul Kültür Üniversitesi IKUANTS'in onayından geçmiş bir projedir. Kullanıcılar kolayca alan rezervasyonu yapabilir, mevcut rezervasyonları görüntüleyebilir ve yönetebilir.",
    images: [
      "/antsapp1.jpeg",
      "/antsapp2.jpeg",
      "/antsapp3.jpeg",
      "/antsapp4.jpeg",
      "/antsapp5.jpeg",
      "/antsapp6.jpeg",
    ],
    tags: ["Mobil Uygulama", "Rezervasyon", "Backend"],
    technologies: ["React Native", "Firebase", "Node.js"],
  },
  {
    id: 4,
    title: "Hastane Yönetim Sistemi",
    category: "Kurumsal Yazılım",
    description:
      "Özel Hastaneler için tasarladığımız bu websitesinin amacı kullanıcıların rahatlıkla randevularını, reçetelerini ve tıbbi geçmişlerini görebildikleri aynı zamanda doktorların da randevularını gözlemleyebilip hastaların şikayetlerini online olarak görebildikleri bir sistemdir.",
    fullDescription:
      "Özel Hastaneler için tasarladığımız bu websitesinin amacı kullanıcıların rahatlıkla randevularını, reçetelerini ve tıbbi geçmişlerini görebildikleri aynı zamanda doktorların da randevularını gözlemleyebilip hastaların şikayetlerini online olarak görebildikleri bir sistemdir.\n\nVeritabanı, backend ve frontend tarafımızca yapılmıştır. Hasta-doktor iletişimini kolaylaştıran, güvenli veri yönetimi sağlayan kapsamlı bir sağlık yönetim platformudur.",
    images: [
      "/hastane1.jpeg",
      "/hastane2.jpeg",
      "/hastane3.jpeg",
      "/hastane4.jpeg",
      "/hastane5.jpeg",
    ],
    tags: ["Full-Stack", "Sağlık", "Veritabanı"],
    technologies: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "THK İntranet Sistemi",
    category: "Kurumsal Yazılım",
    description:
      "Türk Hava Kurumu bünyesinde çalışan personelin kurumsal bilgilere hızlı ve güvenli şekilde erişebilmesi amacıyla geliştirilen bir intranet sistemidir. Duyurular, birimler ve iç iletişim modülleri kullanıcı dostu bir arayüzle tek bir platformda sunulmuştur.",
    fullDescription:
      "Türk Hava Kurumu bünyesinde çalışan personelin kurumsal bilgilere hızlı ve güvenli şekilde erişebilmesi amacıyla geliştirilen bir intranet sistemidir.\n\nDuyurular, birimler ve iç iletişim modülleri kullanıcı dostu bir arayüzle tek bir platformda sunulmuştur. Rol tabanlı erişim kontrolü ve güvenlik protokolleri ile kurumsal veri güvenliği sağlanmıştır.",
    images: ["/thk1.jpeg", "/thk2.jpeg", "/thk3.jpeg", "/thk4.jpeg"],
    tags: ["İntranet", "Kurumsal", "İç İletişim"],
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    id: 6,
    title: "Buddy Akademi",
    category: "Kurumsal Website",
    description:
      "İstanbul'da faaliyet gösteren bu dershanenin kurumsal websitesi tarafımızca yapılmıştır. Velilerin fiyat bilgisi almasını ve şirketin kurumsal kimliği açısından büyük bir artı sağlayan bu proje tamamen mobil uyumlu ve kullanıcı dostu bir şekilde tasarlanmıştır.",
    fullDescription:
      "İstanbul'da faaliyet gösteren bu dershanenin kurumsal websitesi tarafımızca yapılmıştır. Velilerin fiyat bilgisi almasını ve şirketin kurumsal kimliği açısından büyük bir artı sağlayan bu proje tamamen mobil uyumlu ve kullanıcı dostu bir şekilde tasarlanmıştır.\n\nOnline kayıt formu, ders programı ve öğretmen tanıtımları gibi özellikler ile zenginleştirilmiştir.",
    images: ["/buddy1.png", "/buddy2.png", "/buddy3.png"],
    tags: ["Kurumsal", "Eğitim", "Responsive"],
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    id: 7,
    title: "FERON E-Ticaret",
    category: "E-Ticaret",
    description:
      "Bir start-up firması olan FERON alışılagelmiş giyim markalarının dışına çıkıp hem metaverse evrenini birleştirip hem de kıyafet satışında bulunan bu startup şirketinin e-ticaret sayfasını MVP düzeyinde tasarlamış olup veritabanı ve backend bağlantıları tarafımızca yapılmıştır.",
    fullDescription:
      "Bir start-up firması olan FERON alışılagelmiş giyim markalarının dışına çıkıp hem metaverse evrenini birleştirip hem de kıyafet satışında bulunan bu startup şirketinin e-ticaret sayfasını MVP düzeyinde tasarlamış olup veritabanı ve backend bağlantıları tarafımızca yapılmıştır.\n\nYenilikçi konsepti ile dijital ve fiziksel dünyayı bir araya getiren benzersiz bir alışveriş deneyimi sunmaktadır.",
    images: [
      "/feron1.png",
      "/feron2.png",
      "/feron3.png",
      "/feron4.png",
      "/feron5.png",
    ],
    tags: ["E-Ticaret", "Metaverse", "Start-up"],
    technologies: ["React", "Node.js", "MongoDB", "Web3.js"],
  },
  {
    id: 8,
    title: "Yiğit Nakış",
    category: "Kurumsal Website",
    description:
      "İstanbul'da yer alan bu tekstil firmasının kendisini tanıtması ve yaptığı çalışmaları paylaşması adına website ve logo tasarımı tarafımızca yapılmıştır. Website tamamen mobil uyumlu ve kullanıcı dostu bir şekilde tasarlanmıştır.",
    fullDescription:
      "İstanbul'da yer alan bu tekstil firmasının kendisini tanıtması ve yaptığı çalışmaları paylaşması adına website ve logo tasarımı tarafımızca yapılmıştır.\n\nWebsite tamamen mobil uyumlu ve kullanıcı dostu bir şekilde tasarlanmıştır. Ürün galerisi, hizmet tanıtımları ve iletişim formları ile zenginleştirilmiştir.",
    images: ["/yigit1.png", "/yigit2.png", "/yigit3.png", "/yigit4.png"],
    tags: ["Kurumsal", "Logo Tasarım", "Tekstil"],
    technologies: ["Next.js", "Tailwind CSS", "Figma"],
  },
  {
    id: 9,
    title: "Nevera Development",
    category: "Kurumsal Website",
    description:
      "Nevera Development Solutions'ın sunduğu yazılım, donanım ve teknoloji odaklı çözümleri tanıtmak, projelerini sergilemek ve kurumsal kimliğini dijital ortamda yansıtmak amacıyla hazırlanmış bir web sitesidir.",
    fullDescription:
      "Nevera Development Solutions'ın sunduğu yazılım, donanım ve teknoloji odaklı çözümleri tanıtmak, projelerini sergilemek ve kurumsal kimliğini dijital ortamda yansıtmak amacıyla hazırlanmış bir web sitesidir.\n\nKullanıcı dostu ve modern bir arayüzle hizmetler, projeler ve iletişim bilgileri tek bir platformda sunulmaktadır.",
    images: [
      "/nevera1.jpeg",
      "/nevera2.jpeg",
      "/nevera3.jpeg",
      "/nevera4.jpeg",
      "/nevera5.jpeg",
    ],
    tags: ["Kurumsal", "Teknoloji", "Modern"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

const services = [
  {
    icon: "🌐",
    title: "Kurumsal Websiteler",
    description:
      "Markanızı dijital dünyada en iyi şekilde temsil eden, modern ve etkileyici kurumsal web siteleri tasarlıyoruz.",
  },
  {
    icon: "🛒",
    title: "E-Ticaret Çözümleri",
    description:
      "Satışlarınızı artıracak, kullanıcı dostu ve güvenli e-ticaret platformları geliştiriyoruz.",
  },
  {
    icon: "📱",
    title: "IoT Sistemleri",
    description:
      "Nesnelerin interneti ile akıllı cihazlarınızı birbirine bağlayan yenilikçi çözümler sunuyoruz.",
  },
  {
    icon: "🤖",
    title: "Yapay Zeka Çözümleri",
    description:
      "İş süreçlerinizi optimize eden, veri odaklı yapay zeka ve makine öğrenmesi çözümleri geliştiriyoruz.",
  },
];

// Project Detail Modal Component
function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentImage]);

  const nextImage = () => {
    const next = (currentImage + 1) % project.images.length;
    setCurrentImage(next);
    setSelectedThumbnail(next);
  };

  const prevImage = () => {
    const prev =
      (currentImage - 1 + project.images.length) % project.images.length;
    setCurrentImage(prev);
    setSelectedThumbnail(prev);
  };

  const selectImage = (index: number) => {
    setCurrentImage(index);
    setSelectedThumbnail(index);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-6xl max-h-[90vh] mx-4 bg-[#0a0a0a] rounded-2xl overflow-hidden border border-[#1a1a1a] animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-y-auto lg:overflow-hidden">
          {/* Image Section */}
          <div className="lg:w-3/5 bg-[#050505]">
            {/* Main Image */}
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[60vh]">
              <Image
                src={project.images[currentImage]}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 rounded-full text-sm text-white">
                {currentImage + 1} / {project.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="p-4 border-t border-[#1a1a1a]">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectImage(idx)}
                      className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedThumbnail === idx
                          ? "border-indigo-500"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="lg:w-2/5 p-6 lg:p-8 lg:overflow-y-auto lg:max-h-[90vh]">
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full mb-4">
              {project.category}
            </span>

            {/* Title */}
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {project.title}
            </h2>

            {/* Description */}
            <div className="prose prose-invert max-w-none mb-6">
              {project.fullDescription.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-gray-400 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">
                Kullanılan Teknolojiler
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#151515] border border-[#252525] text-white text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-3">
                Etiketler
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
              <a
                href="#iletisim"
                onClick={onClose}
                className="block w-full text-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-medium transition-colors"
              >
                Benzer Proje İstiyorum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: (typeof projects)[0];
  index: number;
  onClick: () => void;
}) {
  return (
    <div
      className={`project-card group relative bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl overflow-hidden opacity-0 animate-fade-up stagger-${(index % 10) + 1} cursor-pointer`}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="project-image object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Detayları Gör
          </span>
        </div>

        {/* Image Count Badge */}
        {project.images.length > 1 && (
          <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {project.images.length}
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-indigo-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-[#151515] border border-[#252525] text-gray-400 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <main className="noise min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight gradient-text">
              NEVERA & SERAZIO
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#hakkimizda"
              className="text-sm text-gray-400 hover:text-white transition-colors link-underline"
            >
              Hakkımızda
            </a>
            <a
              href="#projeler"
              className="text-sm text-gray-400 hover:text-white transition-colors link-underline"
            >
              Çalışmalarımız
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[150px] animate-pulse-glow"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="opacity-0 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full text-sm text-gray-400 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Yeni projeler için müsaitiz
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-up stagger-2 text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
            Dijital Dünyada
            <br />
            <span className="gradient-text">Çözüm Ortağınız</span>
          </h1>

          <p className="opacity-0 animate-fade-up stagger-3 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Kurumsal websiteler, e-ticaret platformları, IoT sistemleri ve yapay
            zeka destekli çözümler ile işletmenizi geleceğe taşıyoruz.
          </p>

          <div className="opacity-0 animate-fade-up stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projeler"
              className="btn-primary px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-lg font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Projelerimizi İnceleyin
            </a>
            <a
              href="#projeler"
              className="px-8 py-4 bg-transparent border border-[#2a2a2a] hover:border-[#3a3a3a] rounded-xl text-lg font-semibold transition-all hover:bg-[#0a0a0a]"
            >
              Çalışmalarımızı İnceleyin
            </a>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
              Hakkımızda
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Teknoloji ile
              <span className="gradient-text"> Geleceği Şekillendiriyoruz</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              NEVERA Development Solutions olarak, işletmelerin dijital dönüşüm
              yolculuğunda güvenilir bir çözüm ortağı olarak yer alıyoruz. Modern
              teknolojileri kullanarak kullanıcı dostu ve yenilikçi çözümler
              sunuyoruz.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card p-6 bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl opacity-0 animate-fade-up stagger-${index + 1}`}
              >
                <div className="w-14 h-14 bg-[#151515] rounded-xl flex items-center justify-center text-3xl mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Tamamlanan Proje" },
              { number: "8+", label: "Mutlu Müşteri" },
              { number: "3+", label: "Yıllık Deneyim" },
              { number: "24/7", label: "Destek" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projeler" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              Çalışmalarımız
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Başarılı
              <span className="gradient-text"> Projelerimiz</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Farklı sektörlerden müşterilerimiz için geliştirdiğimiz projeler
              ile gurur duyuyoruz.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold gradient-text">NEVERA & SERAZIO</span>
              <span className="text-sm text-gray-400">
                © 2025 NEVERA Development Solutions. Tüm hakları saklıdır.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#hakkimizda"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Hakkımızda
              </a>
              <a
                href="#projeler"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Projeler
              </a>
              <a
                href="#iletisim"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                İletişim
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

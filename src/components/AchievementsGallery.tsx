import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'

// All images from the shivani folder with custom handwritten captions
const galleryImages = [
  { src: "/shivani/IMG-20200314-WA0000.jpg", title: "ISRO YUVIKA Certificate", caption: "an unforgettable journey at ISRO." },
  { src: "/shivani/IMG-20191210-WA0050.jpg", title: "National Science Congress 2019", caption: "where the innovation began." },
  { src: "/shivani/IMG-20230926-WA0019.jpg", title: "State Level Presentation", caption: "pitching to the state experts." },
  { src: "/shivani/IMG-20211011-WA0111.jpg", title: "Storytelling Recognition", caption: "weaving tales on the national stage." },
  { src: "/shivani/1726402078346.jpg", title: "Excellence Certificate", caption: "hard work recognized." },
  { src: "/shivani/IMG-20210422-WA0123.jpg", title: "School Day Science Expo", caption: "our early science days." },
  { src: "/shivani/IMG-20210915-WA0000.jpg", title: "Yuva Hackathon Project", caption: "building the prototype." },
  { src: "/shivani/IMG-20210915-WA0001.jpg", title: "Yuva Hackathon Pitching", caption: "sharing our tech vision." },
  { src: "/shivani/IMG-20211013-WA0000.jpg", title: "Literary Award", caption: "speech is silver, silence is gold." },
  { src: "/shivani/IMG-20230926-WA0007.jpg", title: "Academic Excellence", caption: "achieving higher milestones." },
  { src: "/shivani/IMG-20230926-WA0012.jpg", title: "District Innovation Fair", caption: "solving real-world problems." },
  { src: "/shivani/IMG-20230926-WA0017.jpg", title: "State Level Certificate", caption: "official state recognition." },
  { src: "/shivani/IMG-20240911-WA0042.jpg", title: "IIIT Basar Science Expo", caption: "representing IIIT Basar." },
  { src: "/shivani/IMG-20241104-WA0008.jpg", title: "Leadership Excellence Award", caption: "guiding the next innovators." },
  { src: "/shivani/IMG-20241104-WA0046.jpg", title: "Mini Marathon Organizing Team", caption: "running for a cause." },
  { src: "/shivani/IMG-20250203-WA0017.jpg", title: "Eureka Zonals IIT Bombay", caption: "zonal rounds at IIT Bombay!" }
]


const rotations = [
  'rotate-[-3deg]',
  'rotate-[2deg]',
  'rotate-[-1deg]',
  'rotate-[3deg]',
  'rotate-[-2deg]'
]

export const AchievementsGallery: React.FC = () => {
  const [selectedImgIdx, setSelectedImgIdx] = useState<number | null>(null)

  // Chunk images into 4 distinct rows
  const rows = [
    galleryImages.slice(0, 4),
    galleryImages.slice(4, 8),
    galleryImages.slice(8, 12),
    galleryImages.slice(12)
  ]

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImgIdx !== null) {
      setSelectedImgIdx((selectedImgIdx + 1) % galleryImages.length)
    }
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImgIdx !== null) {
      setSelectedImgIdx((selectedImgIdx - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <div className="w-full space-y-14 py-8">
      {rows.map((rowItems, rowIdx) => (
        <div key={rowIdx} className="relative py-12 flex flex-wrap justify-center gap-6 md:gap-10">
          
          {/* Dashed Clothesline Thread */}
          <div className="absolute top-[80px] left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-300/80 z-0 pointer-events-none" />
          
          {rowItems.map((img, idx) => {
            const globalIdx = rowIdx * 4 + idx
            const rotClass = rotations[globalIdx % rotations.length]
            
            return (
              <motion.div
                key={idx}
                className="relative transition-all duration-300 hover:rotate-0 hover:-translate-y-4 hover:z-10 w-[95%] sm:w-80 md:w-96 shrink-0"
              >
                {/* Clothespin / Pin Clip */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-4 h-10 bg-amber-100 rounded-sm border border-amber-900/10 shadow-md z-20 flex flex-col items-center justify-between py-1 pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-600/30" />
                  <div className="w-2.5 h-0.5 bg-amber-800/20" />
                </div>


                {/* Polaroid Frame */}
                <div
                  onClick={() => setSelectedImgIdx(globalIdx)}
                  className={`bg-white p-2.5 pb-6 rounded-sm shadow-[0_8px_20px_-6px_rgba(0,0,0,0.12)] border border-slate-200/80 cursor-pointer ${rotClass}`}
                >
                  <div className="aspect-[4/3] rounded-sm overflow-hidden bg-slate-50 relative group">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-103"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold flex items-center gap-1 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                        <ZoomIn size={10} />
                        Zoom
                      </span>
                    </div>
                  </div>

                  {/* Handwritten Script Caption */}
                  <p className="font-handwriting text-xl md:text-2xl text-slate-800 tracking-wide mt-3 text-center leading-tight">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      ))}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImgIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImgIdx(null)}
            className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImgIdx(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition-all cursor-pointer"
            >
              <X size={24} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-6 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all cursor-pointer"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={selectedImgIdx}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                src={galleryImages[selectedImgIdx].src}
                alt={galleryImages[selectedImgIdx].title}
                className="max-w-full max-h-[70vh] rounded-lg shadow-2xl border border-white/5 object-contain"
              />
              <p className="text-white font-display font-medium text-lg text-center px-4">
                {galleryImages[selectedImgIdx].title}
              </p>
              <span className="text-xs text-gray-500 font-mono">
                {selectedImgIdx + 1} / {galleryImages.length}
              </span>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-6 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all cursor-pointer"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

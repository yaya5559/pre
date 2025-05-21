import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css'; // Ensure styles are imported

function Maps() {
  const [showOptions, setShowOptions] = useState(false);
  const [activeMapIndex, setActiveMapIndex] = useState(null);
  const navigate = useNavigate();

  const mapSources = [
    { title: "📍 Map 1:", src: "AI.png", type: "image" },
    { title: "📍 Map 2:", src: "lst.png", type: "image" },
    { title: "📍 Map 3:", src: "A.png", type: "image" },
    { title: "📍 Map 4:", src: "k.png", type: "image" },
    
  ];

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    if (showOptions) {
      setActiveMapIndex(null);
    }
  };

  const selectMap = (index) => {
    setActiveMapIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', damping: 12, stiffness: 120 },
    },
    exit: { opacity: 0, scale: 0.9 },
  };

  const renderMapContent = () => {
    const selected = mapSources[activeMapIndex];
    if (!selected) return null;

    if (selected.type === 'html') {
      return (
        <iframe
          src={selected.src}
          title={selected.title}
          style={{
            width: '100%',
            height: '80vh',
            minHeight: '500px',
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          }}
        />
      );
    } else {
      return (
        <img
          src={selected.src}
          alt={selected.title}
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          }}
        />
      );
    }
  };

  return (
    <div className="maps-container">
      <header className="maps-header">
        <h2 className="section-title">Explore U.S. Homelessness Maps</h2>
        <div className="maps-controls">
          <motion.button
            className="main-toggle-button"
            onClick={toggleOptions}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showOptions ? '✕ Close Maps' : '☰ Show Maps'}
          </motion.button>
          <motion.button
            className="back-button"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {showOptions && (
          <motion.div
            className="maps-option-bar"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {mapSources.map((map, index) => (
              <motion.button
                key={index}
                className={`option-button ${activeMapIndex === index ? 'active' : ''}`}
                onClick={() => selectMap(index)}
                variants={buttonVariants}
                whileHover={{ scale: 1.1 }}
              >
                {map.title}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeMapIndex !== null && (
          <motion.div
            key={activeMapIndex}
            className="map-visualization-card"
            variants={mapVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {renderMapContent()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Maps;

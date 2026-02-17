// src/pages/AboutUs.jsx

import React from 'react';
import styles from '../styles/AboutUs.module.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleSchedulePickup = () => {
    navigate('/submit');
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>About EcoCycle</h1>
        <p className={styles.subtitle}>Turning e-waste into eco-opportunity 🌿</p>
      </section>

      <section className={styles.section}>
        <h2>Who We Are</h2>
        <p>
          <strong>EcoCycle</strong> is a purpose-driven platform focused on solving the growing crisis of electronic waste.
          Our mission is to provide easy, accessible, and ethical e-waste recycling options to individuals and organizations.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Vision</h2>
        <blockquote>“To build a sustainable world where every discarded device finds new life.”</blockquote>
        <p>
          We believe in empowering every citizen to take part in restoring the balance between technology and nature.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            ♻ <strong>Responsibility</strong>
            <p>We’re accountable for our tech and our environment.</p>
          </div>
          <div className={styles.valueCard}>
            🧠 <strong>Innovation</strong>
            <p>We use cutting-edge tech to track and recycle e-waste safely.</p>
          </div>
          <div className={styles.valueCard}>
            🌍 <strong>Sustainability</strong>
            <p>We promote circular economy through green practices.</p>
          </div>
          <div className={styles.valueCard}>
            🤝 <strong>Community</strong>
            <p>We work with people, not just for people.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Ready to Make a Change?</h2>
        <p>
          Join our growing network of eco-conscious citizens. Schedule a pickup and take the first step toward a cleaner planet.
        </p>
        <button onClick={handleSchedulePickup} className={styles.ctaButton}>Schedule Pickup</button>
      </section>
    </div>
  );
};

export default AboutUs;
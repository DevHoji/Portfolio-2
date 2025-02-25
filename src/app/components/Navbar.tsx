'use client';

import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Container, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      component={motion.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      position="fixed"
      sx={{
        background: isScrolled 
          ? 'rgba(10, 25, 47, 0.85)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', padding: '1rem 0' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Box
              component="a"
              href="#home"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 0L46.6506 12.5V37.5L25 50L3.34936 37.5V12.5L25 0Z"
                  fill="url(#logo-gradient)"
                />
                <text
                  x="50%"
                  y="55%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                  fontFamily="Arial"
                >
                  YAB
                </text>
                <defs>
                  <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9C90DE" />
                    <stop offset="100%" stopColor="#2196F3" />
                  </linearGradient>
                </defs>
              </svg>
            </Box>
          </motion.div>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Button
                  href={item.href}
                  sx={{
                    color: 'white',
                    fontSize: '1rem',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      '&::after': {
                        width: '100%',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      backgroundColor: '#9C90DE',
                      transition: 'width 0.3s ease-in-out',
                    },
                  }}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(10, 25, 47, 0.95)',
              backdropFilter: 'blur(10px)',
              padding: '1rem',
              zIndex: 1000,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(156, 144, 222, 0.1)',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </AppBar>
  );
}

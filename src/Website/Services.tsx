import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Box, Container, Typography } from '@mui/material';
import diamondPendant from '../assets/diamond-pendant.svg';
import diamondRing from '../assets/diamond-ring.svg';
import heroSectionBg from '../assets/heroSectionBg.svg';
import ourStory from '../assets/our-story.png';
import websiteDesktop from '../assets/website-desktop.png';
import whoWeAre from '../assets/who-we-are.png';
import diamondBg from '../assets/diamond-bg.png';
import Header from './Header';
import Footer from './Footer';

const Services = () => {
  return (
    <>
      <Container
        maxWidth='xl'
        sx={{
          py: 4,
          px: { xs: 2, sm: 3, md: 4, lg: 5 },
          position: 'relative',
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -50,
            left: 0,
            right: -6,
            zIndex: 1001,
          }}
        >
          <Header showLogo={false} />
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${heroSectionBg})`,
            bgcolor: '#90D5FF33',
            pl: {
              xs: 3,
              sm: 4,
              md: 7,
            },
            pt: {
              xs: 4,
              sm: 5,
              md: 7,
            },
            pb: {
              xs: 6,
              md: 7,
            },
            borderRadius: {
              xs: 3,
              md: 6,
            },
            position: 'relative',
            mb: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: {
              xs: '280px',
              sm: '320px',
              md: '380px',
            },
            overflow: 'hidden',
          }}
        >
          <Box
            component='img'
            src={diamondPendant}
            alt='Diamond Pendant'
            sx={{
              position: 'absolute',
              height: {
                xs: '180px',
                sm: '200px',
                md: '240px',
              },
              objectFit: 'contain',
              left: {
                xs: '-5%',
                sm: '-2%',
                md: '-1%',
              },
              top: 0,
              zIndex: 2,
              filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))',
              display: { xs: 'none', sm: 'block' },
            }}
          />

          <Box
            component='img'
            src={diamondRing}
            alt='Diamond Ring'
            sx={{
              position: 'absolute',
              height: {
                xs: '160px',
                sm: '200px',
                md: '160px',
              },
              objectFit: 'contain',
              right: {
                xs: 0,
                sm: 0,
                md: 0,
              },
              bottom: -12,
              zIndex: 2,
              filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))',
              display: { xs: 'none', sm: 'block' },
            }}
          />

          <Typography
            variant='h1'
            component='h1'
            sx={{
              fontWeight: 600,
              color: '#1a1a1a',
              textAlign: 'center',
              zIndex: 1,
              mb: 1,
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem',
              },
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{
              color: '#666',
              textAlign: 'center',
              zIndex: 1,
              fontSize: {
                xs: '0.9rem',
                sm: '1rem',
                md: '1.1rem',
              },
              px: 2,
            }}
          >
            Revolutionizing the diamond industry with precision, innovation, and
            trust—delivering excellence from mine to market
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            mb: 8,
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                height: { xs: 'auto', md: '350px' },
                borderRadius: '8px',
                overflow: 'hidden',
                mb: 3,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                position: 'relative',
                backgroundImage: `url(${diamondBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  color: 'white',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: { xs: 'center', md: 'flex-start' },
                  position: 'relative',
                  minHeight: { xs: '300px', md: 'auto' },
                  zIndex: 2,
                  maxWidth: { md: '45%' },
                  background: 'rgba(14,39,58,0.85)',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <Box
                  sx={{
                    border: '1px solid white',
                    borderRadius: '6px',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant='h3'
                    sx={{
                      fontSize: { xs: '2.2rem', md: '3rem' },
                      fontWeight: 600,
                      mb: 1,
                    }}
                    textAlign='center'
                  >
                    Get frosted
                  </Typography>

                  <Typography
                    variant='subtitle1'
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.2rem' },
                      mb: 5,
                      opacity: 0.9,
                      borderBottom: '2px solid rgba(255,255,255,0.3)',
                      pb: 2,
                      width: { xs: '100%', md: '80%' },
                      maxWidth: '400px',
                      textAlign: 'center',
                    }}
                  >
                    Jewelry as unique as you
                  </Typography>

                  <Box
                    sx={{
                      mt: 4,
                      border: '1px solid white',
                      borderRadius: '4px',
                      display: 'inline-block',
                      px: 4,
                      py: 1.5,
                      cursor: 'pointer',
                      width: 'fit-content',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    <Typography
                      variant='button'
                      sx={{ letterSpacing: 2, fontWeight: 500 }}
                    >
                      EXPLORE DIAMONDS
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Two smaller service boxes */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
              }}
            >
              {/* Natural Diamonds */}
              <Box
                sx={{
                  height: { xs: '140px', sm: '150px' },
                  borderRadius: '8px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    backgroundImage:
                      'url(https://images.pexels.com/photos/4040441/pexels-photo-4040441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0,0,0,0.5)',
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      border: '1px solid white',
                      borderRadius: '4px',
                      px: 4,
                      py: 2,
                      cursor: 'pointer',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    <Typography
                      variant='subtitle1'
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '1.1rem',
                      }}
                    >
                      Natural Diamonds
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Lab Grown Diamonds */}
              <Box
                sx={{
                  height: { xs: '140px', sm: '150px' },
                  borderRadius: '8px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  background: '#a6a6a6',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      border: '1px solid white',
                      borderRadius: '4px',
                      px: 4,
                      py: 2,
                      cursor: 'pointer',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    <Typography
                      variant='subtitle1'
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '1.1rem',
                      }}
                    >
                      Lab grown Diamonds
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mb: 8, position: 'relative' }}>
          <Typography
            variant='h2'
            component='h2'
            sx={{
              fontSize: { xs: '3.5rem', md: '5rem', lg: '7rem' },
              fontWeight: 700,
              color: '#f9f9f9',
              position: 'absolute',
              top: { xs: '-30px', md: '-50px' },
              left: 0,
              right: 0,
              textAlign: 'center',
              zIndex: 0,
              whiteSpace: 'nowrap',
            }}
          >
            Our Services
          </Typography>

          <Typography
            variant='h2'
            component='h2'
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: '#1a3a5f',
              position: 'relative',
              zIndex: 1,
              textAlign: 'center',
              mb: { xs: 5, md: 6 },
            }}
          >
            Our Services
          </Typography>

          {/* Top row with 4 cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr 1fr',
              },
              gap: 3,
              mb: 3,
            }}
          >
            {/* Quality Assurance */}
            <Box
              sx={{
                bgcolor: '#0c2e47',
                borderRadius: '8px',
                p: 3,
                color: 'white',
                height: '100%',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  bgcolor: '#e6f2ff',
                  width: 48,
                  height: 48,
                  borderRadius: '8px',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z'
                    fill='#0c2e47'
                  />
                </svg>
              </Box>
              <Typography
                variant='h6'
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  mt: 'auto',
                }}
              >
                Uncompromising Quality Assurance
              </Typography>
            </Box>

            {/* Commerce Hub */}
            <Box
              sx={{
                bgcolor: '#0c2e47',
                borderRadius: '8px',
                p: 3,
                color: 'white',
                height: '100%',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  bgcolor: '#e6f2ff',
                  width: 48,
                  height: 48,
                  borderRadius: '8px',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z'
                    fill='#0c2e47'
                  />
                </svg>
              </Box>
              <Typography
                variant='h6'
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  mt: 'auto',
                }}
              >
                Exclusive Commerce Hub App
              </Typography>
            </Box>

            {/* Shipping */}
            <Box
              sx={{
                bgcolor: '#0c2e47',
                borderRadius: '8px',
                p: 3,
                color: 'white',
                height: '100%',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  bgcolor: '#e6f2ff',
                  width: 48,
                  height: 48,
                  borderRadius: '8px',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM6 18.5C5.17 18.5 4.5 17.83 4.5 17C4.5 16.17 5.17 15.5 6 15.5C6.83 15.5 7.5 16.17 7.5 17C7.5 17.83 6.83 18.5 6 18.5ZM19.5 9.5L21.46 12H17V9.5H19.5ZM18 18.5C17.17 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5Z'
                    fill='#0c2e47'
                  />
                </svg>
              </Box>
              <Typography
                variant='h6'
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  mt: 'auto',
                }}
              >
                Rapid & Reliable Shipping Solutions
              </Typography>
            </Box>

            {/* Stone Matching */}
            <Box
              sx={{
                bgcolor: '#0c2e47',
                borderRadius: '8px',
                p: 3,
                color: 'white',
                height: '100%',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  bgcolor: '#e6f2ff',
                  width: 48,
                  height: 48,
                  borderRadius: '8px',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16 5L19 8H15L12 5H8L5 8H2L12 21L15 17.5V13.5L18 11V8L16 5ZM14.5 13.73L13 15.5V19L8 13H2.5L4.5 11H9L12 8H14.5L16 9.5V11L14.5 13.73Z'
                    fill='#0c2e47'
                  />
                </svg>
              </Box>
              <Typography
                variant='h6'
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  mt: 'auto',
                }}
              >
                Effortless Stone Matching
              </Typography>
            </Box>
          </Box>

          {/* Bottom row with 3 cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr',
              },
              gap: 3,
              maxWidth: { md: '75%' },
              mx: 'auto',
            }}
          >
            {/* Customer App */}
            <Box
              sx={{
                bgcolor: '#0c2e47',
                borderRadius: '8px',
                p: 3,
                color: 'white',
                height: '100%',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  bgcolor: '#e6f2ff',
                  width: 48,
                  height: 48,
                  borderRadius: '8px',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19Z'
                    fill='#0c2e47'
                  />
                </svg>
              </Box>
              <Typography
                variant='h6'
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  mt: 'auto',
                }}
              >
                Branded Customer App Solution
              </Typography>
            </Box>

            {/* AR Experience */}
            <Box
              sx={{
                bgcolor: '#0c2e47',
                borderRadius: '8px',
                p: 3,
                color: 'white',
                height: '100%',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  bgcolor: '#e6f2ff',
                  width: 48,
                  height: 48,
                  borderRadius: '8px',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.5 13H8V15H10.5V13ZM12.5 11H14V7.5H10V9H12.5V11ZM10 16.5V19H12.5V17H14V21H15.5V15.5H11.5V16.5H10ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19Z'
                    fill='#0c2e47'
                  />
                </svg>
              </Box>
              <Typography
                variant='h6'
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  mt: 'auto',
                }}
              >
                Immersive AR Experience
              </Typography>
            </Box>

            {/* API Connectivity */}
            <Box
              sx={{
                bgcolor: '#0c2e47',
                borderRadius: '8px',
                p: 3,
                color: 'white',
                height: '100%',
                minHeight: '120px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  bgcolor: '#e6f2ff',
                  width: 48,
                  height: 48,
                  borderRadius: '8px',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06C19.68 10.66 20.04 10.07 20.04 9.39C20.04 8.37 19.23 7.55 18.2 7.55C17.89 7.55 17.59 7.63 17.33 7.78C16.67 6.29 15.23 5.2 13.5 5.2C11.77 5.2 10.34 6.29 9.67 7.78C9.4 7.63 9.1 7.55 8.8 7.55C7.77 7.55 6.96 8.37 6.96 9.39C6.96 10.07 7.31 10.66 7.86 11.06C7.81 11.36 7.8 11.68 7.8 12C7.8 12.33 7.82 12.64 7.86 12.94C7.31 13.34 6.96 13.93 6.96 14.61C6.96 15.63 7.77 16.45 8.8 16.45C9.11 16.45 9.41 16.37 9.67 16.22C10.34 17.71 11.77 18.8 13.5 18.8C15.23 18.8 16.67 17.71 17.33 16.22C17.6 16.37 17.9 16.45 18.2 16.45C19.23 16.45 20.04 15.63 20.04 14.61C20.04 13.93 19.68 13.34 19.14 12.94Z'
                    fill='#0c2e47'
                  />
                </svg>
              </Box>
              <Typography
                variant='h6'
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  mt: 'auto',
                }}
              >
                Effortless API Connectivity
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mb: 8, position: 'relative' }}>
          <Typography
            variant='h2'
            component='span'
            sx={{
              fontSize: { xs: '3.5rem', md: '5rem', lg: '7rem' },
              fontWeight: 700,
              color: '#f9f9f9',
              position: 'absolute',
              top: { xs: '-30px', md: '-50px' },
              left: 0,
              right: 0,
              textAlign: 'center',
              zIndex: 0,
              whiteSpace: 'nowrap',
            }}
          >
            How Can We Help?
          </Typography>

          <Typography
            variant='h2'
            component='h2'
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: '#1a3a5f',
              position: 'relative',
              zIndex: 1,
              textAlign: 'center',
              mb: 1,
            }}
          >
            How Can We Help You?
          </Typography>

          <Typography
            variant='body1'
            sx={{
              color: '#667891',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              mb: 5,
            }}
          >
            We offer reliable and expert diamond services, guiding our clients
            seamlessly through every step of buying and selling.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
              },
              gap: 3,
            }}
          >
            {/* Diamond Valuation & Certification */}
            <Box
              sx={{
                display: 'flex',
                bgcolor: '#e6f2ff',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  width: '80px',
                  bgcolor: '#0c2e47',
                  display: 'flex',
                  justifyContent: 'center',
                  pt: 3,
                }}
              >
                <Box
                  sx={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10.67 18L5 12.33L6.41 10.91L10.67 15.17L17.59 8.25L19 9.66L10.67 18Z'
                      fill='white'
                    />
                  </svg>
                </Box>
              </Box>
              <Box sx={{ p: 3, flex: 1 }}>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0c2e47',
                    mb: 1,
                  }}
                >
                  Diamond Valuation & Certification
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#667891',
                    fontSize: '0.9rem',
                  }}
                >
                  Accurate assessment and authentication of diamonds to ensure
                  quality, authenticity, and fair market value.
                </Typography>
              </Box>
            </Box>

            {/* Secure Selling Support */}
            <Box
              sx={{
                display: 'flex',
                bgcolor: '#e6f2ff',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  width: '80px',
                  bgcolor: '#0c2e47',
                  display: 'flex',
                  justifyContent: 'center',
                  pt: 3,
                }}
              >
                <Box
                  sx={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM11 14.82C8.17 14.2 6 11.7 6 9C6 8.45 6.45 8 7 8H9.5V7C9.5 6.45 9.95 6 10.5 6H13.5C14.05 6 14.5 6.45 14.5 7V8H17C17.55 8 18 8.45 18 9C18 11.7 15.83 14.2 13 14.82V17H16V19H8V17H11V14.82Z'
                      fill='white'
                    />
                  </svg>
                </Box>
              </Box>
              <Box sx={{ p: 3, flex: 1 }}>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0c2e47',
                    mb: 1,
                  }}
                >
                  Secure Selling Support
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#667891',
                    fontSize: '0.9rem',
                  }}
                >
                  Get the best value for your diamonds with our reliable selling
                  process.
                </Typography>
              </Box>
            </Box>

            {/* Investment Guidance */}
            <Box
              sx={{
                display: 'flex',
                bgcolor: '#e6f2ff',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  width: '80px',
                  bgcolor: '#0c2e47',
                  display: 'flex',
                  justifyContent: 'center',
                  pt: 3,
                }}
              >
                <Box
                  sx={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'
                      fill='white'
                    />
                  </svg>
                </Box>
              </Box>
              <Box sx={{ p: 3, flex: 1 }}>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0c2e47',
                    mb: 1,
                  }}
                >
                  Investment Guidance
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#667891',
                    fontSize: '0.9rem',
                  }}
                >
                  Expert insights on diamond investments for long-term value.
                </Typography>
              </Box>
            </Box>

            {/* Trusted Buying Assistance */}
            <Box
              sx={{
                display: 'flex',
                bgcolor: '#e6f2ff',
                borderRadius: '8px',
                overflow: 'hidden',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  width: '80px',
                  bgcolor: '#0c2e47',
                  display: 'flex',
                  justifyContent: 'center',
                  pt: 3,
                }}
              >
                <Box
                  sx={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.7 15.3c-.4-.4-1-.4-1.4 0l-3.2 3.2-1.4-1.4c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.1 2.1c.4.4 1 .4 1.4 0l3.9-3.9c.4-.4.4-1 0-1.4M15 3c-2.2 0-4 1.8-4 4 0 .5.1.9.2 1.3-.7.2-1.4.5-2 .9-.3-.6-.8-1-1.4-1.3C8.9 7.9 9 7.5 9 7c0-2.2-1.8-4-4-4S1 4.8 1 7s1.8 4 4 4h11c.4 0 .7-.1 1-.2.6.4 1.3.7 2 .9-.1.4-.2.8-.2 1.3 0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5c-1.2 0-2.3.4-3.1 1.1C21 8.6 21 8.1 21 7.6V7c0-2.2-1.8-4-4-4m-11 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m15 5c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3M15 5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2'
                      fill='white'
                    />
                  </svg>
                </Box>
              </Box>
              <Box sx={{ p: 3, flex: 1 }}>
                <Typography
                  variant='h6'
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#0c2e47',
                    mb: 1,
                  }}
                >
                  Trusted Buying Assistance
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#667891',
                    fontSize: '0.9rem',
                  }}
                >
                  Helping you find the perfect diamond with expert guidance and
                  transparency.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Services;

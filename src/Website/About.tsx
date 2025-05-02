import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Box, Container, Typography } from '@mui/material';
import diamondMultiple from '../assets/diamond-multiple.svg';
import heroSectionBg from '../assets/heroSectionBg.svg';
import ourStory from '../assets/our-story.png';
import websiteDesktop from '../assets/website-desktop.png';
import whoWeAre from '../assets/who-we-are.png';
import Header from './Header';
import Footer from './Footer';

const About = () => {
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
          <Header />
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
            src={diamondMultiple}
            alt='Diamond'
            sx={{
              position: 'absolute',
              height: {
                xs: '100px',
                sm: '140px',
                md: '160px',
              },
              objectFit: 'contain',
              left: {
                xs: '-5%',
                sm: '-2%',
                md: '-1%',
              },
              bottom: 0,
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
            About Us
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
            A Worldwide Network Connecting Diamonds Buyers & Sellers
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
          <Box
            sx={{
              flex: '1',
              maxWidth: { md: '50%' },
            }}
          >
            <Box sx={{ position: 'relative', mb: 3 }}>
              <Typography
                variant='h2'
                component='h2'
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  color: '#1a1a1a',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant='h2'
                component='span'
                sx={{
                  fontSize: { xs: '5rem', md: '7rem' },
                  fontWeight: 700,
                  color: '#f0f0f0',
                  position: 'absolute',
                  top: { xs: '-30px', md: '-50px' },
                  left: { xs: '-10px', md: '-15px' },
                  zIndex: 0,
                }}
              >
                Our Story
              </Typography>
            </Box>

            <Typography
              variant='body1'
              sx={{
                color: '#666',
                mb: 2,
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', md: '1rem' },
                maxWidth: '95%',
              }}
            >
              Our dedicated team of experienced professionals works tirelessly
              to deliver top-tier services to our clients. With years of
              industry expertise, they provide trustworthy guidance and support
              to buyers, suppliers, and more. The Diamond Port oversees every
              aspect, from purchasing to shipping, including comprehensive
              door-to-door insurance for a seamless experience.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: '1',
              maxWidth: { md: '50%' },
              position: 'relative',
            }}
          >
            <Box
              sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                height: { xs: '280px', sm: '320px', md: '360px' },
                width: '100%',
              }}
            >
              <Box
                component='img'
                src={ourStory}
                alt='Team working together'
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            mb: 8,
            alignItems: 'center',
            bgcolor: '#f0f7ff',
            borderRadius: '16px',
            overflow: 'hidden',
            p: { xs: 3, md: 0 },
          }}
        >
          <Box
            sx={{
              flex: '1',
              p: { xs: 0, md: 5 },
            }}
          >
            <Typography
              variant='h3'
              component='h3'
              sx={{
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                fontWeight: 700,
                color: '#1a3a5f',
                mb: 2,
              }}
            >
              Partner with Us for a Seamless Diamond Trading Experience!
            </Typography>

            <Typography
              variant='body1'
              sx={{
                color: '#667891',
                lineHeight: 1.7,
                fontSize: { xs: '0.9rem', md: '1rem' },
              }}
            >
              At The Diamond Port, we prioritize trust, quality, and efficiency.
              Whether you're a buyer or a supplier, our expert team ensures
              smooth transactions, secure shipping, and comprehensive insurance.
              Join our global network and experience a hassle-free way to trade
              diamonds!
            </Typography>
          </Box>

          <Box
            sx={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              p: { xs: 0, md: 5 },
            }}
          >
            <Box
              component='img'
              src={websiteDesktop}
              alt='Diamond trading platform preview'
              sx={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: { xs: '220px', sm: '280px', md: '320px' },
                objectFit: 'contain',
                transform: { xs: 'scale(1)', md: 'scale(1.05)' },
                filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.1))',
              }}
            />
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
            Our Premium Features
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
            Our Premium Features
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 4 },
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                flex: 1,
                bgcolor: '#f0f7ff',
                borderRadius: '16px',
                p: 3,
                textAlign: 'center',
                maxWidth: { xs: '100%', md: '33%' },
              }}
            >
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  bgcolor: '#e0eeff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                }}
              >
                <LocalShippingIcon
                  sx={{ color: '#1a3a5f', fontSize: '28px' }}
                />
              </Box>

              <Typography
                variant='h5'
                component='h3'
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#1a3a5f',
                }}
              >
                Fast & Free Shipping
              </Typography>

              <Typography
                variant='body2'
                sx={{
                  color: '#667891',
                  lineHeight: 1.7,
                  fontSize: '0.9rem',
                }}
              >
                Enjoy hassle-free and express delivery at no extra cost! We take
                pride in offering swift and secure shipping, ensuring your
                diamonds reach you safely and on time.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                bgcolor: '#f0f7ff',
                borderRadius: '16px',
                p: 3,
                textAlign: 'center',
                maxWidth: { xs: '100%', md: '33%' },
              }}
            >
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  bgcolor: '#e0eeff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                }}
              >
                <PaymentIcon sx={{ color: '#1a3a5f', fontSize: '28px' }} />
              </Box>

              <Typography
                variant='h5'
                component='h3'
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#1a3a5f',
                }}
              >
                Secure & Transparent Payments
              </Typography>

              <Typography
                variant='body2'
                sx={{
                  color: '#667891',
                  lineHeight: 1.7,
                  fontSize: '0.9rem',
                }}
              >
                Our intuitive platform guarantees safe and seamless
                transactions. Choose from multiple suppliers and make worry-free
                payments with complete transparency.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                bgcolor: '#f0f7ff',
                borderRadius: '16px',
                p: 3,
                textAlign: 'center',
                maxWidth: { xs: '100%', md: '33%' },
              }}
            >
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  bgcolor: '#e0eeff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                }}
              >
                <SupportAgentIcon sx={{ color: '#1a3a5f', fontSize: '28px' }} />
              </Box>

              <Typography
                variant='h5'
                component='h3'
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#1a3a5f',
                }}
              >
                24/7 Online Support & Live Inventory
              </Typography>

              <Typography
                variant='body2'
                sx={{
                  color: '#667891',
                  lineHeight: 1.7,
                  fontSize: '0.9rem',
                }}
              >
                Browse our real-time diamond inventory anytime, anywhere. Our
                support team is always ready to assist you in selecting the
                perfect piece with confidence.
              </Typography>
            </Box>
          </Box>
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
          <Box
            sx={{
              flex: 1,
              maxWidth: { md: '50%' },
              position: 'relative',
            }}
          >
            <Box
              sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                height: { xs: '280px', sm: '320px', md: '360px' },
                width: '100%',
              }}
            >
              <Box
                component='img'
                src={whoWeAre}
                alt='Jeweler examining a diamond'
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              maxWidth: { md: '50%' },
              position: 'relative',
            }}
          >
            <Box sx={{ position: 'relative', mb: 3 }}>
              <Typography
                variant='h2'
                component='h2'
                sx={{
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#1a3a5f',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                Who are we?
              </Typography>
              <Typography
                variant='h2'
                component='span'
                sx={{
                  fontSize: { xs: '5rem', md: '4rem' },
                  fontWeight: 700,
                  color: '#f7f7f7',
                  position: 'absolute',
                  top: { xs: '-30px', md: '-50px' },
                  left: { xs: '-10px', md: '-15px' },
                  right: 0,
                  zIndex: 0,
                }}
              >
                Who are we?
              </Typography>
            </Box>

            <Typography
              variant='body1'
              sx={{
                color: '#667891',
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', md: '1rem' },
              }}
            >
              A pioneering force in the diamond industry, we connect buyers and
              sellers through a seamless, transparent, and innovative ecosystem.
              Committed to excellence, we revolutionize diamond sourcing with
              technology-driven solutions, ensuring trust, efficiency, and
              unmatched quality in every transaction. 💎✨
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default About;

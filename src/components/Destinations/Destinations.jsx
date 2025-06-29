import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { Box, Typography, Grid, Card, CardMedia,Container, CardContent, IconButton, Chip, Stack, Button, } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';


const trips = [
  {
    id: 1,
    image: '/slide-03.webp',
    location: 'Scotland',
    title: 'Interlaken Winter – Meet Us There',
    featured: true,
    mediaCount: 5,
    isVideo: true,
    rating: 5,
    people: 20,
    days: 2,
    price: 774,
  },
  {
    id: 2,
    image: '/slide-03.webp',
    location: 'Oxford',
    title: 'GoldenPass Express from Montreux',
    featured: false,
    mediaCount: 5,
    isVideo: true,
    rating: 5,
    people: 20,
    days: 2,
    price: 99,
  },
  {
    id: 3,
    image: '/slide-03.webp',
    location: 'Meiringen',
    title: 'Isle Of Skye & The Highlands, Switzer',
    featured: true,
    mediaCount: 5,
    isVideo: true,
    rating: 5,
    people: 20,
    days: 2,
    price: 315,
  },
];

const destinations = [
  {
    title: "Gyeongju",
    image: "/slide-03.webp",
    description: "Mi bibendum neque egestas congue. Arcu risus quis varius quam quisque id diam vel. Nunc sed blandit...",
    tours: 5,
  },
  {
    title: "Dolomites",
    image: "/slide-03.webp",
  },
  {
    title: "Lake Braies",
    image: "/slide-03.webp",
  },
  {
    title: "Blue Ridge",
    image: "/slide-03.webp",
  },
  {
    title: "Monument Valley",
    image: "/images/monument-valley.jpg",
  },
];

const DiscoverSection = () => {
  return (
    <section>
      <Navbar />
      <Box
        sx={{
          position: 'relative',
          height: { xs: '70vh', md: '60vh' },
          backgroundImage: 'url(/slide-03.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.4)',
            zIndex: 1,
          }}
        />
        <Container
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            component={motion.h2}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            sx={{ mb: 2 }}
          >
            Discover the World
          </Typography>

          <Typography
            variant="h6"
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            sx={{ mb: 4 }}
          >
            Find your next adventure among our hand-picked destinations.
          </Typography>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button variant="contained" size="large" color="primary">
              Explore Now
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Frame 1 */}
      <Box sx={{ py: 10, px: { xs: 2, md: 8 }, bgcolor: '#fff' }}>
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
          Explore our exclusive, otherworldly retreats
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
        >
          Discover hand-picked destinations with stunning views and unforgettable experiences.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 3,
            px: 1,
            ml: 25,
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {trips.map((trip) => (
            <Card
              key={trip.id}
              sx={{
                position: 'relative',
                minWidth: 320,
                maxWidth: 320,
                height: 400,
                flex: '0 0 auto',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 4,
              }}
            >
              <CardMedia
                component="img"
                image={trip.image}
                alt={trip.title}
                sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  p: 2,
                  color: 'white',
                }}
              >
                <Box sx={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 1 }}>
                  {trip.featured && <Chip label="Featured" color="warning" size="small" />}
                  <Chip label={`🖼 ${trip.mediaCount}`} size="small" />
                  {trip.isVideo && <Chip label="🎥" size="small" />}
                </Box>
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    bgcolor: 'white',
                    '&:hover': { bgcolor: '#f5f5f5' },
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocationOnIcon fontSize="small" />
                    <Typography variant="caption">{trip.location}</Typography>
                  </Stack>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {trip.title}
                  </Typography>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={2}>
                      <Typography variant="caption">
                        <PeopleIcon fontSize="small" sx={{ mr: 0.5 }} />
                        {trip.people} People
                      </Typography>
                      <Typography variant="caption">
                        <CalendarTodayIcon fontSize="small" sx={{ mr: 0.5 }} />
                        {trip.days} Days
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2" fontWeight={700}>
                      ${trip.price}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

     {/* Frame 2 Carousel Section */}
<Box
  sx={{
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    overflowX: 'scroll',
    px: { xs: 2, md: 10 },
    gap: 4,
    scrollSnapType: 'x mandatory',
    scrollPaddingLeft: '10%',
    '&::-webkit-scrollbar': { display: 'none' },
  }}
>
  {trips.map((trip, index) => {
    const isCenter = index === 1;

    return (
      <Card
        key={trip.id}
        sx={{
          flex: '0 0 320px',
          height: 420,
          scrollSnapAlign: 'center',
          borderRadius: 4,
          overflow: 'hidden',
          transform: isCenter ? 'scale(1.1)' : 'scale(0.88)',
          filter: !isCenter ? 'brightness(0.7) blur(1px)' : 'none',
          transition: 'all 0.4s ease-in-out',
          boxShadow: isCenter ? 6 : 2,
        }}
      >
        <CardMedia
          component="img"
          image={trip.image}
          alt={trip.title}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Gradient + Text Overlay */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            color: '#fff',
            px: 2,
            py: 3,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.05))',
          }}
        >
          <Typography variant="subtitle2">{trip.location}</Typography>
          <Typography variant="h6" fontWeight={600}>
            {trip.title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
          >
            <Typography variant="caption">
              <PeopleIcon fontSize="inherit" sx={{ mr: 0.5 }} />
              {trip.people} People
            </Typography>
            <Typography variant="caption">
              <CalendarTodayIcon fontSize="inherit" sx={{ mr: 0.5 }} />
              {trip.days} Days
            </Typography>
            <Typography variant="subtitle2" fontWeight={700}>
              ${trip.price}
            </Typography>
          </Stack>
        </Box>
      </Card>
    );
  })}
</Box>


    </section>
  );
};

export default DiscoverSection;
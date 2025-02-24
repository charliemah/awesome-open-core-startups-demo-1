import React, { Fragment } from 'react'
import { alpha } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import StartupCard from '../../components/StartupCard'

const titles = [ 'Awesome', 'Open-Core', 'Startups' ]

const subtitles = [
  'This is a curated list of awesome open-core startups funded by Y Combinator (YC), inspired by',
  'Awesome OSS Alternatives',
  'https://github.com/RunaCapital/awesome-oss-alternatives',
  'maintained by Runa Capital.',
  'The information has been sourced from publicly available datasets (e.g. https://www.ycombinator.com/companies/industry/open-source) intended for wide dissemination and use.'
]

function Home({ startups }) {

  return (
    <Container maxWidth='xl' disableGutters>
      <Box
        sx={(theme) => ({
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
              : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat'
        })}
      >
        <Container
          id='hero'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 }
          }}
        >
          <Stack spacing={3} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Typography
              variant='h1'
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'center',
                textAlign: 'center',
                color: 'text.primary',
                fontFamily: 'Arial',
                fontWeight: 'bold',
                fontSize: 'clamp(2.5rem, 8vw, 3rem)'
              }}
            >
              {titles[0]}&nbsp;
              <Typography
                component='span'
                variant='h1'
                sx={{
                  color: 'primary.main',
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                  fontSize: 'clamp(2.5rem, 8vw, 3rem)'
                }}
              >
                {titles[1]}&nbsp;
              </Typography>
              {titles[2]}
            </Typography>
            <Typography
              textAlign='center'
              color='text.secondary'
              sx={{ alignSelf: 'center', fontFamily: 'Helvetica', fontWeight: 'medium', width: { sm: '100%', md: '80%' } }}
            >
              {subtitles[0]}&nbsp;
              <Box color='primary.main' sx={{ fontWeight: 'bold' }} display='inline'>
                <Link
                  color='inherit'
                  underline='none'
                  href={subtitles[2]}
                  target='_blank'
                >
                  {subtitles[1]}&nbsp;
                </Link>
              </Box>
              {subtitles[3]}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf='center'
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
            >
              <TextField
                id='outlined-basic'
                hiddenLabel
                size='small'
                variant='outlined'
                aria-label='Enter your email address'
                placeholder='Your email address'
                inputProps={{
                  autocomplete: 'off',
                  ariaLabel: 'Enter your email address',
                }}
              />
              <Button variant='contained' color='primary'>
                Join Waitlist
              </Button>
            </Stack>
            <Typography variant='caption' textAlign='center' sx={{ opacity: 0.8 }}>
              By clicking &quot;Join Waitlist&quot; you agree to our&nbsp;
              <Link href='#' color='primary'>
                Terms & Conditions
              </Link>
              .
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ bgcolor: 'background.default' }}>
        <Container
          id='startups'
          sx={{
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 24 },
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 6 },
          }}
        >
          <Typography variant='caption' textAlign='center' sx={{ opacity: 0.8 }}>
            {subtitles[4]}
          </Typography>
          <Grid container spacing={3}>
            {startups.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))}
          </Grid>
          <Button variant='outlined'>
            Explore all
          </Button>
        </Container>
      </Box>         
    </Container>
  )
}

export default Home
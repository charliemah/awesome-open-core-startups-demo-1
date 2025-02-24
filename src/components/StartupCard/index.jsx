import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import CardActionArea from '@mui/material/CardActionArea'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'

const StartupCard = ({ startup }) => {
const linkedinUrl = `https://www.linkedin.com/company/${startup.linkedinId}`
const githubUrl = `https://github.com/${startup.githubRepoId}`

  return (
    <Grid item sm={12} md={6} key={startup.id} sx={{ display: 'flex' }}>
      <CardActionArea component={RouterLink} to={startup.websiteUrl} target='_blank'>
        <Card
          style={{ height: 240 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1
          }}
        >
          <CardHeader
            disableTypography
            avatar={
              <Avatar
                src={startup.logoUrl}
                sx={{ width: 60, height: 60 }}
                variant='rounded'
              />
            }
            action={
              <IconButton component={RouterLink} to={githubUrl} target='_blank'>
                <GitHubIcon />
              </IconButton>
            }
            title={
              <Stack
                direction='column'
                alignItems='baseline'
              >
                <Typography variant='h6' sx={{ fontFamily: 'Arial', fontWeight: 'bold', lineHeight: '24px' }} >
                  {startup.name}
                </Typography>
                <Stack
                  direction='row'
                  spacing={1}
                >
                  <Typography variant='body2' sx={{ fontFamily: 'Helvetica', fontWeight: 'medium', lineHeight: '20px' }}  align='left'>
                    <Box color='text.secondary' display='inline'>Founded</Box> {startup.founded}
                  </Typography>                
                  <Typography variant='body2' sx={{ fontFamily: 'Helvetica', fontWeight: 'medium', lineHeight: '20px' }}  align='left'>
                    <Box color='text.secondary' display='inline'>YC batch</Box> {startup.ycBatch}
                  </Typography>
                  <Typography variant='body2' sx={{ fontFamily: 'Helvetica', fontWeight: 'medium', lineHeight: '20px' }}  align='left'>
                    <Box color='text.secondary' display='inline'>Alternative to</Box> {startup.alternativeTo}
                  </Typography>
                </Stack>
              </Stack>
            }
          />
          <CardContent sx={{ ml: 8.5 }}>
            <Typography variant='body1' sx={{ fontFamily: 'Arial', fontWeight: 'medium', lineHeight: '24px' }} align='left'>
              {startup.description}
            </Typography>
          </CardContent>
          <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={(theme) => ({
              backgroundColor:
                theme.palette.mode === 'light' ? 'grey.100' : 'grey.800'
            })}              
          >
            <Stack
              direction='row'
              alignItems='center'
              sx={{ ml: 1 }}
              spacing={0.5}
            >
              <GitHubIcon sx={{ fontSize: 18 }} />
              <Typography variant='subtitle2' color='text.secondary' component='div'>
                <Box color='text.primary' display='inline'>{startup.starsCount}</Box> stars
              </Typography>
              <Typography variant='subtitle2' color='text.secondary' component='div'>
                <Box color='text.primary' display='inline'>{startup.forksCount}</Box> forks
              </Typography>
            </Stack>
            <Typography variant='body2' color='text.secondary' sx={{ mr: 2.5 }}>
              <Box color='text.primary' display='inline'>{startup.contributorsCount}</Box> contributors
            </Typography>
          </Stack>
        </Card>
      </CardActionArea> 
    </Grid>
  )
}

export default StartupCard

import React from 'react'
import './DonatePage.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Bird from './image/bird2.png'

const DonatePage = () => {
  return (
    <div className='donate-page'>
      <div className="donate-left">
        <div className="donate-image">
          <img src={Bird} alt="" />
        </div>
      </div>
      <div className="donate-right">
        <div className="donate-right-header">
          <img src="https://mwt.org.np/wp-content/uploads/2022/08/cropped-MWT-Logo_Primary-Logo-1-200x102.png" alt="" />
          <h1>Donate of a Cause</h1>
        </div>
        <div className="donate-form">
          <form action="" className='donate-form-data'>
            <div className="donate-data">
              <div className="donate-data-name mwt_input">
                <Box
                  component="form"
                  noValidate
                  sx={{
                    '& > :not(style)': { m: 1, width: '55ch' },
                  }}
                  autoComplete="off"
                >
                  <TextField label="Name" variant="standard" />
                </Box>
              </div>
              <div className="donate-data-email mwt_input">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '55ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField label="Email" variant="standard" />
                </Box>
              </div>
              <div className="donate-data-address mwt_input">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '55ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField label="Address" variant="standard" />
                </Box>
              </div>
              <div className="donate-data-organization mwt_input">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '55ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField label="Organization" variant="standard" />
                </Box>
              </div>
              <div className="donate-data-number mwt_input">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '55ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField label="Mobile Number" variant="standard" />
                </Box>
              </div>
              <div className="donate-data-suggestion mwt_input">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '55ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField label="Any Suggestion" variant="standard" />
                </Box>
              </div>
              <div className="donate-data-continue">
                  <Button variant="contained">Continue</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DonatePage
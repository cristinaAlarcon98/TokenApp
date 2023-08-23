import React, { useState } from 'react';
import { Grid, Box, Button, Typography } from '@mui/material';
import { generateToken, validateToken } from '../../services/services.ts';
import { IMaskInput } from 'react-imask';
import '../../styles/components.css';
import { mainGrid, outputBox } from '../../styles/styles.ts';


export const MainPage = () => {
    const [validateInputValue, setValidateInputValue] = useState<String>(null)
    const [generateInputValue, setGenerateInputValue] = useState<String>(null)
    const [tokenValidation, setTokenValidation] = useState<String>(null)
    const [generatedToken, setGeneratedToken] = useState<String>(null)
    const getTokenValidation = async () => {
        const isValid = await validateToken(validateInputValue);
        setTokenValidation(isValid ? 'The Token is valid!' : 'The Token is NOT valid...')
    };
    const getGeneratedToken = async () => {
        const token = await generateToken(generateInputValue);
        setGeneratedToken(token);
    };

    return (
        <Grid container sx={mainGrid}>
            <Grid item container xs={12}>
                <Grid item container xs={6} key={'generate'}>
                    <Grid item xs={12} sx={{justifyContent: 'center'}}>
                        <Typography variant={'h1'}>{'Generate Token'}</Typography>
                    </Grid>
                    <Grid item container xs={12} sx={{marginTop: '10px', justifyContent: 'center'}}>
                        <Box sx={{maxWidth: '400px'}}>
                            <Typography variant={'h2'}>
                                {'This section allows you to create a new token based on your chosen digits.Customize the available digits and click "Generate" to create a token.'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item container xs={12} sx={{justifyContent: 'center', marginTop: '50px'}}>
                        <IMaskInput
                            className={'custom-input'}
                            mask="0-0-0-0-0-0-0-0-0"
                            definitions={{
                                '#': /[1-9]/,
                            }}
                            placeholder="0-0-0-0-0"
                            overwrite
                            onAccept={(value: any, mask: {
                                unmaskedValue: String;
                            }) => {
                                setGenerateInputValue(mask.unmaskedValue);
                                setGeneratedToken(null)
                            }}
                        />
                    </Grid>
                    <Grid item container xs={12} sx={{justifyContent: 'center', marginTop: '50px'}}>
                        <Box sx={outputBox}>
                            {(!generatedToken || generateInputValue?.length < 1) ?
                                <Typography variant="h2">{'Your Generated Token'}</Typography> :
                                <Typography variant="h2">{generatedToken}</Typography>
                            }
                        </Box>
                    </Grid>
                    <Grid item container xs={12} sx={{justifyContent: 'center', marginTop: '30px'}}>
                        <Button
                            variant="contained"
                            disabled={!generateInputValue || generateInputValue.length < 1}
                            onClick={() => getGeneratedToken()}>
                            Generate
                        </Button>
                    </Grid>
                </Grid>
                <Grid item container xs={6} key={'validate'}>
                    <Grid item container xs={12} sx={{justifyContent: 'center'}}>
                        <Typography variant={'h1'}>
                            {'Validate Token'}
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} sx={{marginTop: '10px', justifyContent: 'center'}}>
                        <Box maxWidth="400px">
                            <Typography variant="h2" sx={{textAlign: 'center'}}>
                                {'Use this section to check the validity of a token using the Luhn algorithm. Enter the token and click "Validate" to see if it\'s a valid token.'}
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item container xs={12} sx={{marginTop: '50px', justifyContent: 'center'}}>
                        <IMaskInput
                            className={'custom-input'}
                            mask="0000-0000-0000-0000"
                            definitions={{
                                '#': /[1-9]/,
                            }}
                            placeholder="0000-0000-0000-0000"
                            overwrite
                            onAccept={(value: any, mask: {
                                unmaskedValue: String
                            }) => {
                                setValidateInputValue(mask.unmaskedValue);
                                setTokenValidation(null)
                            }}
                        />
                    </Grid>
                    <Grid item container xs={12} sx={{justifyContent: 'center', marginTop: '50px'}}>
                        <Box sx={outputBox}>
                            {(!tokenValidation || validateInputValue.length < 16) ?
                                <Typography variant="h2">{'Enter Token'}</Typography>
                                :
                                <Typography variant="h2">{tokenValidation}</Typography>
                            }
                        </Box>
                    </Grid>
                    <Grid item container xs={12} sx={{justifyContent: 'center', marginTop: '30px'}}>
                        <Button variant="contained"
                                disabled={!validateInputValue || validateInputValue.length < 16}
                                onClick={() => getTokenValidation()}>
                            Validate
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
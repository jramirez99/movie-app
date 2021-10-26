import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player'

import { useFetch } from '../../hooks/useFetch';
import{ baseURL, apiKey } from '../../config/api';

import { ButtonP, } from '../../styles/components/movie/movieInfo/movieInfoStyled';
import { I } from '../../styles/base/botonesStyled';
import { Button } from '../../styles/base/botonesStyled';


export const ModalVideo = ( props ) => {

    const res = useFetch( `${ baseURL }/movie/${ props.id }/videos?api_key=${ apiKey }&language=es-MX` );
    const video = res.result.results;

    if ( video === undefined || video.length === 0 ) return null;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ReactPlayer 
                url={`https://youtu.be/${ video[0].key }`} 
                width="100%" 
            />

            <Button
                bg="transparent"
                color="#000"
                fsize="2.5rem"
                padding="0"
                margin="0"
                onClick={ props.onHide }
            > 
                X 
            </Button>
        </Modal>
    );
};

export const ButtonModal = ( { id } ) => {
    const [modalShow, setModalShow] = useState( false );

    return (
        <>
            <ButtonP 
                padding=".7rem .8rem"
                onClick={ () => setModalShow( true )}
            > 
                <I 
                    className="fas fa-play"
                    size="2rem"
                    >
                </I>

                Ver trailer
            </ButtonP>

            <ModalVideo
                show={ modalShow }
                onHide={ () => setModalShow( false )}
                id={ id }
            />
        </>
    );
};
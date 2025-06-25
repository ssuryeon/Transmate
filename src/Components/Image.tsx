import styled from 'styled-components';
import '@uploadcare/react-uploader/core.css';
import { useState } from 'react';
import { FileUploaderRegular, OutputCollectionState, OutputCollectionStatus } from '@uploadcare/react-uploader';

const ImageContent = styled.div`
  width: 45vw;
  height: 80vh;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  img {
    max-width: 100%;
    max-height: calc(100% - 80px);
    height: auto;
    width: auto;
    object-fit: contain;
    display: block;
  }
  @media(max-width: 768px){
    width: 90vw;
    margin-bottom: 15px;
    }
`;

function Image(){
    const [imageUrl, setImageUrl] = useState('');
    const handleChange = (event: OutputCollectionState<OutputCollectionStatus, "maybe-has-group">) => {
        console.log(event);
        const files = event.successEntries;
        if (files && files.length > 0) {
            const file = files[0];
            const cdnUrl = file.cdnUrl;
            if (cdnUrl) setImageUrl(cdnUrl);
        } 
        else {
            setImageUrl('');
        }
    };
    return (
        <ImageContent>
            <FileUploaderRegular
                sourceList="local, camera, gdrive"
                filesViewMode="grid"
                classNameUploader="uc-light"
                pubkey="97ddc87f1c8b0d49aa7a"
                onChange={handleChange}
            />
            {imageUrl && <img src={imageUrl} alt="Uploaded" id="uploaded"/>}
        </ImageContent>
    );
}

export default Image;
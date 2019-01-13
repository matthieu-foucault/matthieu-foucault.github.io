import React from 'react';
import AvatarComponent from 'avataaars';

const Avatar = () => (
  <AvatarComponent
    style={{ width: 100, height: 100, margin: 10 }}
    avatarStyle="Circle"
    topType="ShortHairShortFlat"
    accessoriesType="Prescription02"
    hairColor="Black"
    facialHairType="BeardLight"
    facialHairColor="Black"
    clotheType="BlazerSweater"
    eyeType="Happy"
    eyebrowType="DefaultNatural"
    mouthType="Default"
    skinColor="Light"
  />
);

export default Avatar;

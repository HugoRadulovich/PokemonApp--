

import { Container, Image, Text } from '@nextui-org/react'

import React from 'react'

export const Nofavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 'calc(100vh - 100px)',
        
    }}>
        <Text h1>No hay favoritos</Text>
        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
            alt='pokemon'
            width={250}
            height={250}
            css={{opacity: 0.1}}
            
        />
    </Container>
  )
}


import { Grid } from '@nextui-org/react'
import React from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'
import { FC } from 'react';

interface Props{
    pokemons: number[],
}
export const FavoritePokemons: FC<Props> = ({pokemons}) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
                                        {
                                            pokemons.map(id =>(
                                                <FavoriteCardPokemon id={id} key={id}/>
                                            ))
                                        }
                                    </Grid.Container>
    )
}



import { Layout } from '@/components/layouts'
import { FavoritePokemons } from '@/components/pokemon';
import { Nofavorites } from '@/components/ui'
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';
import { useEffect, useState } from 'react'



    const FavoritePage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons()); 
    }, [])
    

    return (
        
        <Layout title='Favoritos'>
            {
                favoritePokemons.length === 0 
                                    ? (<Nofavorites />) 
                                    : (<FavoritePokemons pokemons={favoritePokemons}/> )
            }
        </Layout>
    )}

export default  FavoritePage
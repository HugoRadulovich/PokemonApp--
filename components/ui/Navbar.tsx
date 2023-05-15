import {  Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import Link from "next/link";



export const Navbar = () => {

    const {theme} = useTheme();

    return (
        <div style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray300.value

        }}>
           
                <Link href='/'>
                    <Image
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                            alt="icono de la app"
                            width={70}
                            height={70}/>
                            <Text color="white" h2>P</Text>
                            <Text color="white" h3>okemon</Text>
                            
                </Link>
            <Spacer css={{flex:1}}/>

           
                <Link  href='/favoritos'>
                <Text color="white">Favoritos</Text>
                </Link>


        </div>
    )
}


// //  <Link href='/'>
//                     <Text color="white" h2>P</Text>
//                     <Text color="white" h3>okemon</Text>
//                     <Spacer css={{flex:1}}/>
//                     <Text color="white">Favoritos</Text>
//             // </Link>
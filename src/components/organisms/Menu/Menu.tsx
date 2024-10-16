import React from 'react'
import {MenuIcon} from "../../atoms/MenuIcon/MenuIcon";
import * as S from './styles'
import {Colors} from "../../../common/constants/Colors";
import {FontAwesome5, MaterialIcons, MaterialCommunityIcons, Ionicons, Fontisto} from "@expo/vector-icons";
import {navigate} from "../../../common/utils/RootNavigation";
import {useDispatch, useSelector} from "react-redux";
import {USUARIO_LOGADO} from "../../../common/redux/actions/usuarioLogado.actions";
import {RootState} from "../../../common/redux/RootState";
import {EscopoUsuario} from "../../../common/enums/EscopoUsuario";

export const Menu = () => {
    const usuarioLogado = useSelector((state: RootState) => state.usuarioLogado);
    const dispatch = useDispatch()
    return (
        <S.MenuBox>
            {
                //Cliente
            }
            {usuarioLogado.escopo === EscopoUsuario.CLIENTE && <MenuIcon label="Meus pets" onClick={() => {
                navigate('Meus pets')
            }}>
                <MaterialIcons name="pets" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>}
            {usuarioLogado.escopo === EscopoUsuario.CLIENTE &&<MenuIcon label="Namoro ou amizade" onClick={() => {
                navigate('Reproducao')
            }}>
                <MaterialCommunityIcons name="reproduction" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>}
            {usuarioLogado.escopo === EscopoUsuario.CLIENTE &&<MenuIcon label="Clínicas" onClick={() => {
                navigate('Clinicas')
            }}>
                <FontAwesome5 name="clinic-medical" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>}
            {usuarioLogado.escopo === EscopoUsuario.CLIENTE &&<MenuIcon label="Farmácia" onClick={() => {
                navigate('Farmacia')
            }}>
                <Fontisto name="drug-pack" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>}
            {usuarioLogado.escopo === EscopoUsuario.CLIENTE && <MenuIcon label="Adestrador" onClick={() => {
                navigate('Adestradores')
            }}>
                <MaterialIcons name="pets" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>}
            {
                //Clinica
            }
            {usuarioLogado.escopo === EscopoUsuario.CLINICA &&<MenuIcon label="Clínica" onClick={() => {
                navigate('Minha Clinica')
            }}>
                <FontAwesome5 name="clinic-medical" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>}
            {usuarioLogado.escopo === EscopoUsuario.CLINICA &&<MenuIcon label="Planos aceitos" onClick={() => {
                navigate('Planos aceitos')
            }}>
                <FontAwesome5 name="clinic-medical" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>}
            {usuarioLogado.escopo === EscopoUsuario.CLINICA &&<MenuIcon label="Logo" onClick={() => {
                navigate('Logo')
            }}>
                <Ionicons name="logo-react" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>}
            {
                //Admin
            }
            {usuarioLogado.escopo === EscopoUsuario.ADMIN &&<MenuIcon label="Usuários" onClick={() => {
                navigate('Usuarios')
            }}>
                <FontAwesome5 name="users" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>}
            {usuarioLogado.escopo === EscopoUsuario.ADMIN &&<MenuIcon label="Planos" onClick={() => {
                navigate('Planos')
            }}>
                <FontAwesome5 name="signature" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>}
            {usuarioLogado.escopo === EscopoUsuario.ADMIN &&<MenuIcon label="Farmácia de manipulação" onClick={() => {
                navigate('Farmacia')
            }}>
                <Fontisto name="drug-pack" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>}
            {usuarioLogado.escopo === EscopoUsuario.ADMIN && <MenuIcon label="Adestrador" onClick={() => {
                navigate('Adestradores')
            }}>
                <MaterialIcons name="pets" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>}

            {
                //Global
            }
            <MenuIcon label="Sair" onClick={() => {
                dispatch({
                    type: USUARIO_LOGADO.SAIU,
                })
                navigate('Index')
            }}>
                <MaterialIcons name="exit-to-app" size={30} color={Colors.PRIMARY}/>
            </MenuIcon>
        </S.MenuBox>
    );
}
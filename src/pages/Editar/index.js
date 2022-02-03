import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu';
import React,{ useEffect, useState } from 'react';
import axios from "axios";
import {toast} from 'react-toastify';

import {Form, InputCheck, Input, InputDiv, EditarUnidadeDiv, TelaDiv, MenuDiv, Title, SubTitle, Tablelist, DivButtonNew, ButtonNew, Background} from './styles';

function EditarUnidades() {  
    const params = useParams();
    
    const [unidade, setUnidade] = useState([]);
    
    const [apelido, setApelido] = useState('')
    const [local, setLocal] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [ativo, setAtivo] = useState(false)
    
    useEffect(() => {
        async function getUnidade() {
          axios
            .get(`http://localhost:3333/unidades/${params.id}`)
            .then((resp) => {
                setUnidade(resp.data)
                setApelido(resp.data.apelido)
                setLocal(resp.data.local)
                setMarca(resp.data.marca)
                setModelo(resp.data.modelo)     
                setAtivo(resp.data.ativo)           
            })
        }
        getUnidade();        
    }, []);     

       
    //Enviando as atualizações
    async function handleSubmit(unidade) {        
        unidade.preventDefault();
        try {            
            await fetch(`http://localhost:3333/unidades/${params.id}`,
                {                    
                    method: 'PUT',
                    body: JSON.stringify({                        
                        apelido: apelido,
                        local: local,
                        marca: marca,
                        modelo: modelo,
                        ativo: ativo,
                        id: params.id                      
                    }),
                    headers: { 'Content-Type': 'application/json' },
                    },
                )
                toast.success('Alterado com sucesso')
            } catch (error) {
            toast.error('Deu ruim')
        } 
    }    
      
    return (        
        <TelaDiv>
            <MenuDiv>
                <Menu></Menu>
            </MenuDiv>            
            <EditarUnidadeDiv>                
                <Title>Unidades</Title>
                <Background>                    
                    <Form onSubmit={handleSubmit}>
                        <Tablelist>
                            <SubTitle>Edição da Unidade Geradora</SubTitle>
                            <InputDiv>
                                Apelido<br/>
                                <Input type="text"                                
                                    value={apelido}                                
                                    onChange={(unidade) => setApelido(unidade.target.value)}
                                /><br/>
                            </InputDiv>    
                            <InputDiv>
                                Local<br/>
                                <Input type="text"                                
                                    value={local}
                                    onChange={(unidade) => setLocal(unidade.target.value)}
                                /><br/> 
                            </InputDiv>  
                            <InputDiv>
                                Marca<br/>
                                <Input type="text"                                
                                    value={marca}
                                    onChange={(unidade) => setMarca(unidade.target.value)}
                                /><br/>
                            </InputDiv>  
                            <InputDiv>
                                Modelo<br/>
                                <Input type="text"                                
                                    value={modelo}
                                    onChange={(unidade) => setModelo(unidade.target.value)}
                                /><br/>
                            </InputDiv>                                                         
                            <InputCheck name="isTrue" type="checkbox"                                
                                checked={ativo}
                                onChange={(unidade) => setAtivo(unidade.target.checked)}
                            />Ativo                                                                                                                                                               
                        </Tablelist>  
                        <DivButtonNew>                              
                                <ButtonNew type="submit">Salvar</ButtonNew>                            
                        </DivButtonNew>
                    </Form>
                </Background>                
            </EditarUnidadeDiv>              
        </TelaDiv>        
    );     
}
export default EditarUnidades;
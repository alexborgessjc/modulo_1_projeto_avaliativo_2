
import Menu from '../../components/Menu';
import {toast} from 'react-toastify';
import React,{ useState } from 'react';
import {Form, InputCheck, Input, InputDiv, ListaUnidadeDiv, TelaDiv, MenuDiv, Title, SubTitle, Tablelist, DivButtonNew, ButtonNew, Background} from './styles';

function ListaUnidades() { 
    const [apelido, setApelido] = useState('')
    const [local, setLocal] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [ativo, setAtivo] = useState('')
    
    async function handleSubmit(unidade) {        
        unidade.preventDefault();
                         
        try {            
            await fetch('http://localhost:3333/unidades',
                {                    
                    method: 'POST',
                    body: JSON.stringify({
                        apelido: apelido,
                        local: local,
                        marca: marca,
                        modelo: modelo,
                        ativo: ativo                      
                    }),
                    headers: { 'Content-Type': 'application/json' },
                    },
                )
                toast.success('Cadastrado com sucesso')
            } catch (error) {
            toast.error('Deu ruim')
        }        
    }
          
    return (        
        <TelaDiv>
            <MenuDiv>
                <Menu></Menu>
            </MenuDiv>            
            <ListaUnidadeDiv>                
                <Title>Unidades</Title>
                <Background>                    
                    <Form onSubmit={handleSubmit}>
                        <Tablelist>
                            <SubTitle>Cadastro de Unidade Geradora</SubTitle>
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
            </ListaUnidadeDiv>              
        </TelaDiv>        
    );    
}
export default ListaUnidades;
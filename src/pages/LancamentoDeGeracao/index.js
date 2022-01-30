import Select from '../../components/Select';
import Menu from '../../components/Menu';
import {toast} from 'react-toastify';
import axios from "axios";
import React,{ useState, useEffect } from 'react';
import {Form, Input, InputDiv, ListaUnidadeDiv, TelaDiv, MenuDiv, Title, SubTitle, Tablelist, DivButtonNew, ButtonNew, Background} from './styles';

function LancamentoDeGeracao() {    
    const [id, setId] = useState('')    
    const [date, setDate] = useState('')    
    const [valorgerado, setGerado] = useState('')
        
    const [unidade, setUnidade] = useState([]);

    //Obtendo as unidades para o select
    useEffect(() => {
        async function getUnidade() {
        axios
            .get(`http://localhost:3333/unidades`)
            .then((resp) => setUnidade(resp.data))
        }
        getUnidade();        
    }, []); 
    
    //Enviando a geração
    async function handleSubmit(gerado) {        
        gerado.preventDefault();
                         
        try {            
            await fetch('http://localhost:3333/geracao',
                {                    
                    method: 'POST',
                    body: JSON.stringify({
                        id: id,
                        data: date,
                        gerado: valorgerado

                    }),
                    headers: { 'Content-Type': 'application/json' },
                    },
                )
                toast.success('Lançado com sucesso')
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
                                Unidade geradora<br/>
                                <Select
                                    label="Unidade geradora:"
                                    value={unidade.id}                                    
                                    options={unidade}
                                    description="Selecione uma unidade"
                                    //onChange={(gerado) => setUnidade(gerado.target.value)}
                                />
                                <br/>
                            </InputDiv> 
                            <InputDiv>
                                Mês/ano<br/> 
                                <h1>Selected Date: {date}</h1>
                                <input type="date"
                                    onChange={(gerado) => setDate(gerado.target.value)}
                                />
                            </InputDiv>                                                                   
                            <InputDiv>
                                Total kw gerado<br/>
                                <Input type="text"                                
                                    value={valorgerado}
                                    onChange={(gerado) => setGerado(gerado.target.value)}
                                /><br/>
                            </InputDiv>                                                                                                                                                                                            
                        </Tablelist>  
                        <DivButtonNew>                              
                                <ButtonNew type="submit">Cadastrar</ButtonNew>                            
                        </DivButtonNew>
                    </Form>
                </Background>                
            </ListaUnidadeDiv>              
        </TelaDiv>
    );
}
    
export default LancamentoDeGeracao;
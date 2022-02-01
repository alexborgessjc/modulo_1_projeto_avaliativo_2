import Select from '../../components/Select';
import Menu from '../../components/Menu';
import axios from "axios";
import React,{ useState, useEffect } from 'react';
import {Form, Input, InputDiv, ListaUnidadeDiv, TelaDiv, MenuDiv, Title, Tablelist, DivButtonNew, ButtonNew, Background} from './styles';

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
           
        //JSON.parse(JSON.stringify(userData))
        const a = JSON.parse(JSON.stringify(
            {
                idUnidade: id,
                data: date,
                gerado: valorgerado
            }

        ))
        
        axios.post('http://localhost:3333/geracao', a)        
    }
      
    return (
        <TelaDiv>
            <MenuDiv>
                <Menu></Menu>
            </MenuDiv>            
            <ListaUnidadeDiv>                                
                <Title>Lançamento de geração mensal</Title>
                <Background>                    
                    <Form onSubmit={handleSubmit}>
                        <Tablelist>                            
                            <InputDiv>
                                Unidade geradora:<br/>                                
                                <Select
                                    label="Unidade geradora:"                                                                       
                                    options={unidade}
                                    description="Selecione uma unidade"
                                    onChange={(gerado) => setId(gerado.target.value)}
                                />
                                <br/>
                            </InputDiv> 
                            <InputDiv>
                                Mês/ano<br/>                                 
                                <input type="month"
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
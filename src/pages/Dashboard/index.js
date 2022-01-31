import Menu from '../../components/Menu';
import Grafico from '../../components/Grafico';
import Painel from '../../components/Painel';
import React from 'react';
import { DashboardDiv,TelaDiv,MenuDiv,Title, PainelFundo,Tablelist, Background} from './styles';

function Dashboard() {
    return (
        <TelaDiv>
            <MenuDiv>
                <Menu></Menu>
            </MenuDiv>            
            <DashboardDiv>                
                <Title>Dashboard</Title>
                <Background>
                    <PainelFundo>
                        <Painel/> 
                    </PainelFundo>
                    <Tablelist>
                        <Grafico/>                                                                                                                                                                    
                    </Tablelist>                    
                </Background>                
            </DashboardDiv>              
        </TelaDiv>
    );
}
    
export default Dashboard;
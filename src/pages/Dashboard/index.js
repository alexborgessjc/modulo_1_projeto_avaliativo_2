import Menu from '../../components/Menu';
import { DashboardDiv,TelaDiv,MenuDiv} from './styles';

function Dashboard() {
    return (
        <TelaDiv>
            <MenuDiv>
                <Menu></Menu>
            </MenuDiv>            
            <DashboardDiv>
                Dashboard
            </DashboardDiv>              
        </TelaDiv>
    );
}
    
export default Dashboard;
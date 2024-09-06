import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useServices from '../../../../Hooks/Services/useServices';
import ServicesCart from '../../../../Components/SevrviceCart/ServicesCart';


const ServicesTab = () => {

    const [services] = useServices();
    // console.log(services);

    // eslint-disable-next-line no-unused-vars
    const servicesMap = services?.map(item => item.name)

    const primaryCare = services.filter(item => item.name === 'Primary Care')
    const emergencyMedicine = services.filter(item => item.name === 'Emergency Medicine')
    const surgery = services.filter(item => item.name === 'Surgery')
    const pediatrics = services.filter(item => item.name === 'Pediatrics')

    return (
        <div className='mt-6'>
            <Tabs>
                <TabList className='overflow text-start'>
                    <Tab>Primary Care</Tab>
                    <Tab>Emergency Medicine</Tab>
                    <Tab>Surgery</Tab>
                    <Tab>Pediatrics</Tab>
                </TabList>

                <TabPanel>
                    {primaryCare?.map(item => <ServicesCart key={item._id} item={item} />)}
                </TabPanel>
                <TabPanel>
                    {emergencyMedicine?.map(item => <ServicesCart key={item._id} item={item} />)}
                </TabPanel>
                <TabPanel>
                    {surgery?.map(item => <ServicesCart key={item._id} item={item} />)}
                </TabPanel>
                <TabPanel>
                    {pediatrics?.map(item => <ServicesCart key={item._id} item={item} />)}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ServicesTab;
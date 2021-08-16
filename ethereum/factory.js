import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4fb8a2a7719279129aa13D8960E3131Daf840559'
);

export default instance;
import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

import Image from '../Image';

const Delivery = () => {
    return (
        <Stack sx={{ mb: 3 }}>
            <Typography variant='subtitle2' sx={{ mb: 1 }}>1. Delivery form</Typography>
            <Wrapper>
                <Item>
                    <VAT>Freeship</VAT>
                    <Image
                        src='https://salt.tikicdn.com/cache/400x400/ts/product/a5/48/47/cde8081e0b3dad57dff98792f8f07009.jpg.webp'
                        alt=''
                        sx={{ width: '86px', height: '86px' }}
                    />
                    <Stack sx={{ width: 'calc(100% - 95px)' }}>
                        <Name>
                            <Typography variant='body2'>
                                Laptop Dell Inspiron 14 5406 TYCJN1 (Core i7-1165G7/ 8GB DDR4 3200MHz/ 512GB M.2 PCIe NVMe/ MX330 2GB GDDR5/ 14 FHD IPS/ Win10) - Hàng Chính Hãng
                            </Typography>
                        </Name>
                        <Typography variant='subtitle2'>24.490.200 ₫ | x3</Typography>
                    </Stack>
                </Item>
                <Item>
                    <VAT>Freeship</VAT>
                    <Image
                        src='https://salt.tikicdn.com/cache/400x400/ts/product/a5/48/47/cde8081e0b3dad57dff98792f8f07009.jpg.webp'
                        alt=''
                        sx={{ width: '86px', height: '86px' }}
                    />
                    <Stack sx={{ width: 'calc(100% - 95px)' }}>
                        <Name>
                            <Typography variant='body2'>
                                Laptop Dell Inspiron 14 5406 TYCJN1 (Core i7-1165G7/ 8GB DDR4 3200MHz/ 512GB M.2 PCIe NVMe/ MX330 2GB GDDR5/ 14 FHD IPS/ Win10) - Hàng Chính Hãng
                            </Typography>
                        </Name>
                        <Typography variant='subtitle2'>24.490.200 ₫ | x3</Typography>
                    </Stack>
                </Item>
                <Item>
                    <VAT>Freeship</VAT>
                    <Image
                        src='https://salt.tikicdn.com/cache/400x400/ts/product/a5/48/47/cde8081e0b3dad57dff98792f8f07009.jpg.webp'
                        alt=''
                        sx={{ width: '86px', height: '86px' }}
                    />
                    <Stack sx={{ width: 'calc(100% - 95px)' }}>
                        <Name>
                            <Typography variant='body2'>
                                Laptop Dell Inspiron 14 5406 TYCJN1 (Core i7-1165G7/ 8GB DDR4 3200MHz/ 512GB M.2 PCIe NVMe/ MX330 2GB GDDR5/ 14 FHD IPS/ Win10) - Hàng Chính Hãng
                            </Typography>
                        </Name>
                        <Typography variant='subtitle2'>24.490.200 ₫ | x3</Typography>
                    </Stack>
                </Item>
            </Wrapper>
        </Stack>
    );
};

const Wrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    padding: '15px'
}));

const Item = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.background.default}`,
    borderRadius: '5px',
    padding: '15px',
    margin: '0 0 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

const Name = styled('div')({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden'
});

const VAT = styled('span')({
    position: 'absolute',
    top: '5px',
    right: '15px',
    display: 'block',
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'rgb(0, 153, 0)'
});

export default Delivery;

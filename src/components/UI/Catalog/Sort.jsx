import React from "react";
import {Box, InputLabel, FormControl, MenuItem, Select, Input} from "@mui/material";
import "./../scss/style.scss"
import "./../scss/_global.scss"

const Sort = ({setSort, sortBy, searchQuery, setSearchQuery}) => (
    <div className='filter'>
        <div className='filter__sort'>
            <Box sx={{
                minWidth: 200,
            }}>
                <FormControl fullWidth>
                    <InputLabel>Сортировать по</InputLabel>
                    <Select
                        label="Сортировать по" value={sortBy} onChange={e => setSort(e.target.value)}>
                        <MenuItem value="recommendations">рекомендации</MenuItem>
                        <MenuItem value="price_increase">возрастанию цены</MenuItem>
                        <MenuItem value="decreasing_prices">убыванию цены</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
        <div className='filter__search'>
            <MenuItem>
                <Input
                    onChange={e => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    placeholder='Поиск...'/>
            </MenuItem>
        </div>

        {/*<Menu secondary>*/}
        {/*    <div className='sort'>*/}
        {/*        Сортировать по:*/}
        {/*        <Menu.Item*/}
        {/*            active={sortBy === 'recommendations'}*/}
        {/*            onClick={setSort.bind(this, 'recommendations')}*/}
        {/*        >Рекомендации</Menu.Item>*/}
        {/*        <Menu.Item*/}
        {/*            active={sortBy === 'price_increase'}*/}
        {/*            onClick={setSort.bind(this, 'price_increase')}*/}
        {/*        >возрастанию цены</Menu.Item>*/}
        {/*        <Menu.Item*/}
        {/*            active={sortBy === 'decreasing_prices'}*/}
        {/*            onClick={setSort.bind(this, 'decreasing_prices')}*/}
        {/*        >убыванию цены</Menu.Item>*/}
        {/*        <Menu.Item>*/}
        {/*            <Input*/}
        {/*                icon="search"*/}
        {/*                onChange={e => setSearchQuery(e.target.value)}*/}
        {/*                value={searchQuery}*/}
        {/*                placeholder='Поиск...'/>*/}
        {/*        </Menu.Item>*/}
        {/*    </div>*/}
        {/*</Menu>*/}
    </div>

)

export default Sort
import React from "react";
import {Box, InputLabel, FormControl, MenuItem, Select, Input} from "@mui/material";
import "../scss/style.scss"
import "../scss/_global.scss"

const Sort = ({sortBy, setSort, searchQuery, setSearchQuery}) => (
    <div className='filter'>
        <div className='filter__sort'>
            <Box sx={{
                minWidth: 200,
                color: 'success.main',
            }}>
                <FormControl fullWidth >
                    <InputLabel>Сортировать по</InputLabel>
                    <Select
                        label="Сортировать по" value={sortBy} onChange={e => setSort(e.target.value)}>
                        <MenuItem value="recommendations">рекомендации</MenuItem>
                        <MenuItem value="price_increase">возрастанию цены</MenuItem>
                        <MenuItem value="decreasing_prices">убыванию цены</MenuItem>
                        <MenuItem value="in_stock">в наличии</MenuItem>
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
    </div>

)

export default Sort
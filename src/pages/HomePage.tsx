import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Stack,
  Title,
  Grid,
  TextInput,
  Tooltip,
  Pagination,
} from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import * as Icons from '@tabler/icons-react';

const limit = 12 * 8;

export const HomePage = () => {
  const { t } = useTranslation();

  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebouncedValue(search, 200);
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const availableIconNames = useMemo(() => {
    if (debouncedSearch) {
      return Object.keys(Icons).filter((item) =>
        item.toLocaleLowerCase().includes(debouncedSearch.toLocaleLowerCase()),
      );
    }

    return Object.keys(Icons);
  }, [debouncedSearch]);

  const shownIconNames = useMemo(() => {
    const start = (activePage - 1) * limit;
    const end = activePage * limit;

    // Ensure we're not going beyond the length of the array
    if (start >= availableIconNames.length) {
      return [];
    } else {
      return availableIconNames.slice(
        start,
        Math.min(end, availableIconNames.length - 1),
      );
    }
  }, [availableIconNames, activePage]);

  return (
    <Stack>
      <Title>{t('Welcome')}</Title>

      <TextInput
        label="Search"
        icon={<Icons.IconSearch size={18} />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Grid>
        {shownIconNames.map((item, index) => {
          // @ts-ignore
          const Icon = Icons[item];

          return (
            <Grid.Col
              key={index}
              span={1}
              className="flex justify-center items-center p-5"
            >
              <Tooltip label={item} position="bottom">
                <Icon key={item} size={32} />
              </Tooltip>
            </Grid.Col>
          );
        })}
      </Grid>

      <Pagination
        value={activePage}
        onChange={setPage}
        total={Math.ceil(availableIconNames.length / limit)}
      />
    </Stack>
  );
};

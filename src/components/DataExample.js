import useJsonFetch from '../hooks/useJsonFetch';
import PropTypes from 'prop-types';

export function DataExample({ endpoint, title }) {
  const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_TEST_URL}${endpoint}`);

  return (
    <div>
      {title}: {(loading && 'Загрузка...') || (data && data.status) || (error && 'Ошибка!')}
    </div>
  );
}

DataExample.propTypes = {
  endpoint: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
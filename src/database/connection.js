import knex from 'knex';
import * as configuration from '../../knexfile';

const connection = knex(configuration.test);

export default connection;

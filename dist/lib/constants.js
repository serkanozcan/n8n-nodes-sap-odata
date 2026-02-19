"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEBHOOK_RATE_LIMIT_CLEANUP_INTERVAL = exports.WEBHOOK_RATE_LIMIT_WINDOW = exports.DEFAULT_WEBHOOK_RATE_LIMIT = exports.CACHE_CLEANUP_INTERVAL = exports.CONNECTION_TEST_TIMEOUT = exports.MAX_WEBHOOK_BODY_SIZE = exports.MAX_NESTING_DEPTH = exports.MAX_JSON_SIZE = exports.RETRY_STATUS_CODES = exports.MAX_RETRY_DELAY = exports.INITIAL_RETRY_DELAY = exports.MAX_RETRY_ATTEMPTS = exports.AUTH_METHODS = exports.CREDENTIAL_TYPE = exports.ERROR_MESSAGES = exports.ODATA_V4_NEXT_LINK = exports.ODATA_V4_RESULT_PATH = exports.ODATA_V2_NEXT_LINK = exports.ODATA_V2_RESULT_PATH = exports.HEADERS = exports.SAP_GATEWAY_CSRF_TIMEOUT = exports.SAP_GATEWAY_SESSION_TIMEOUT = exports.CSRF_TOKEN_CACHE_TTL = exports.METADATA_CACHE_TTL = exports.RATE_LIMIT_WINDOW = exports.DEFAULT_RATE_LIMIT = exports.CSRF_TOKEN_TIMEOUT = exports.DEFAULT_TIMEOUT = exports.MIN_PAGE_SIZE = exports.MAX_PAGE_SIZE = exports.DEFAULT_PAGE_SIZE = void 0;
exports.DEFAULT_PAGE_SIZE = 100;
exports.MAX_PAGE_SIZE = 1000;
exports.MIN_PAGE_SIZE = 1;
exports.DEFAULT_TIMEOUT = 120000;
exports.CSRF_TOKEN_TIMEOUT = 30000;
exports.DEFAULT_RATE_LIMIT = 100;
exports.RATE_LIMIT_WINDOW = 60000;
exports.METADATA_CACHE_TTL = 300000;
exports.CSRF_TOKEN_CACHE_TTL = 600000;
exports.SAP_GATEWAY_SESSION_TIMEOUT = 30 * 60 * 1000;
exports.SAP_GATEWAY_CSRF_TIMEOUT = 10 * 60 * 1000;
exports.HEADERS = {
    ACCEPT: 'application/json',
    CONTENT_TYPE: 'application/json',
    CSRF_FETCH: 'X-CSRF-Token',
};
exports.ODATA_V2_RESULT_PATH = 'd.results';
exports.ODATA_V2_NEXT_LINK = 'd.__next';
exports.ODATA_V4_RESULT_PATH = 'value';
exports.ODATA_V4_NEXT_LINK = '@odata.nextLink';
exports.ERROR_MESSAGES = {
    NO_CREDENTIALS: 'No credentials configured. Please add SAP OData credentials.',
    INVALID_URL: 'Invalid URL configuration. Please check host and service path.',
    INVALID_ENTITY_KEY: 'Invalid entity key format.',
    INVALID_JSON: 'Invalid JSON format in request data.',
    RATE_LIMIT_EXCEEDED: 'Rate limit exceeded. Please try again later.',
    AUTH_FAILED: 'Authentication failed. Please check your credentials.',
    METADATA_FETCH_FAILED: 'Failed to fetch service metadata.',
    CSRF_TOKEN_FAILED: 'Failed to fetch CSRF token for write operation.',
};
exports.CREDENTIAL_TYPE = 'sapOdataApi';
exports.AUTH_METHODS = {
    NONE: 'none',
    BASIC_AUTH: 'basicAuth',
};
exports.MAX_RETRY_ATTEMPTS = 3;
exports.INITIAL_RETRY_DELAY = 1000;
exports.MAX_RETRY_DELAY = 10000;
exports.RETRY_STATUS_CODES = [429, 503, 504];
exports.MAX_JSON_SIZE = 10 * 1024 * 1024;
exports.MAX_NESTING_DEPTH = 100;
exports.MAX_WEBHOOK_BODY_SIZE = 5 * 1024 * 1024;
exports.CONNECTION_TEST_TIMEOUT = 10000;
exports.CACHE_CLEANUP_INTERVAL = 10;
exports.DEFAULT_WEBHOOK_RATE_LIMIT = 100;
exports.WEBHOOK_RATE_LIMIT_WINDOW = 60000;
exports.WEBHOOK_RATE_LIMIT_CLEANUP_INTERVAL = 300000;

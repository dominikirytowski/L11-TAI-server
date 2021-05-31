'use strict';

import userManager from './user.manager';
import postManager from './post.manager';
import postEndpoint from "../REST/post.endpoint";


function getter(manager, request) {
    return function () {
        return manager.create(request, this);
    };
}

export default {
    getUserManager: getter(userManager),
    getPostManager: getter(postManager),
    getPostEndpoint: getter(postEndpoint)
};


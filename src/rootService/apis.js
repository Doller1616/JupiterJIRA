// Singalton Service Class
import endpoints from './endpoints';
class RootService {
    #BASEURL = 'https://reqres.in';
    // #BASEURL = 'https://dummyjson.com';
    // #BASEURL = 'http://localhost:5100';
    
    ENDPOINTS = endpoints;

    constructor() {
        this.#interceptor()
        console.log(">>>>>>>>>>>>>>>> New");
    }

  #interceptor = () => {
        const {fetch: origFetch} = window;
        // override fetch
        window.fetch = async (...args) => {
            // Request -------------------------------------------
            // Pass token, loader
                // console.log("Request --->", args);


            return await origFetch(...args)
            .then((res) => {
                // Response -------------------------------------
                console.log("Response --->", res);

                return res;
            }).catch((err) => console.error(err));
        };
    }

    getReq = async(end_point, obj) =>{
        const url = new URL(this.#BASEURL + end_point);
        obj && Object.keys(obj).forEach(key => url.searchParams.append(key, obj[key]));

        const res = await fetch(url) || {};
        // console.log("ppppppppppppppppp",res)
        const data = await res.json();
        return data;
    }

    postReq = async(end_point, obj) =>{
        console.log(">>>>>post");
        return await fetch(this.#BASEURL + end_point, {
           method: 'POST',
           headers: new Headers({'content-type': 'application/json'}),
           body: JSON.stringify(obj)
        });
    }

    deleteReq = (params) => {
        console.log(">>>>>delete");
    }
}

export default new RootService();
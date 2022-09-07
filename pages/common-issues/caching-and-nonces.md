# Caching And Nonces

Selleradise makes use a Nonces to keep your site secure. Nonces are security tokens in WordPress that usually have lifespan of around **12 hours** by default. So if you are using caching plugin that keep the cache of the page for longer than 12 hours then some functionalities may not work correctly.

## Solution

Set cache timeout rule in whatever caching plugin you are using to avoid keeping the cache for longer than the lifespan of the nonce.

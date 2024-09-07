# Lenis Scroll Configurations

## Smoother Scroll

To make the scroll smoother and slower, you can increase the `duration` and use a more gradual easing function:

```javascript
const lenis = new Lenis({
  duration: 1.5, // Longer duration for smoother scroll
  easing: (t) => 1 - Math.pow(1 - t, 3), // Ease-out cubic easing
});
```

## Snappier Scroll

```js
const lenis = new Lenis({
  duration: 0.8, // Shorter duration for snappier scroll
  easing: (t) => t, // Linear easing for direct scroll
});
```

## Custom Easing

You can also use a custom easing function to create a unique scroll effect:

```javascript
const lenis = new Lenis({
  easing: (t) => Math.pow(t, 2), // Ease-in quadratic easing
});
```

## Custom Duration

You can set a custom duration for the scroll animation:

```javascript
const lenis = new Lenis({
  duration: 2, // Custom duration in seconds
});
```

## Rough Scroll

To make the scroll rougher and more abrupt, you can decrease the `duration` and use a more abrupt easing function:

```javascript
const lenis = new Lenis({
  duration: 0.5, // Shorter duration for rougher scroll
  easing: (t) => 1 - Math.pow(1 - t, 1 / 3), // Ease-out cubic easing
});
```

## Default Configuration

The default configuration for Lenis Scroll is:

```javascript
const lenis = new Lenis({
  duration: 1, // Default duration in seconds
  easing: (t) => t, // Default linear easing
});
```

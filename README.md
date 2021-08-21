[![GitHub issues](https://img.shields.io/github/issues/paulmartins/hugo-digital-garden-theme?style=flat-square&logo=appveyor)](https://github.com/paulmartins/hugo-digital-garden-theme/issues)
[![GitHub forks](https://img.shields.io/github/forks/paulmartins/hugo-digital-garden-theme?style=flat-square&logo=appveyor)](https://github.com/paulmartins/hugo-digital-garden-theme/network)
[![GitHub stars](https://img.shields.io/github/stars/paulmartins/hugo-digital-garden-theme?style=flat-square&logo=appveyor)](https://github.com/paulmartins/hugo-digital-garden-theme/stargazers)
[![license](https://img.shields.io/github/license/paulmartins/hugo-digital-garden-theme?style=flat-square&logo=appveyor)](https://github.com/paulmartins/hugo-digital-garden-theme/blob/main/LICENSE)


# Digital Garden Theme for Hugo

A simple Hugo theme for your digital garden, inspired by Maggie Appleton [website](https://maggieappleton.com/)

Featured included with the theme:
* digital garden / blog
* projects portfolio
* library notes

![Home](https://github.com/paulmartins/hugo-digital-garden-theme/blob/main/images/screenshot_home.png)

## Getting started

1. Install hugo and create a new website: [https://gohugo.io/getting-started/quick-start/](https://gohugo.io/getting-started/quick-start/)
2. Add the theme to your website  
You can either use git submodule or clone the repo in your theme folder

    ```bash
    git submodule add https://github.com/paulmartins/hugo-digital-garden-theme.git themes/digital-garden
    ```

    ```bash
    cd themes
    git clone https://github.com/paulmartins/hugo-digital-garden-theme.git
    ```

3. Customize your site in your `config.toml`. An example is given in the theme folder: `themes/digital-garden/exampleSite/config.toml`

4. Run the server and check your [localhost:1313](http://localhost:1313)
    ```bash
    hugo server
    ```


## Parameters

```
[params]
  name = "Nigalya Ponya"
  description = "Red panda living in the eastern Himalayas."
  initials = "NP"
```

[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fpaulmartins%2Fhugo-digital-garden-theme)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fpaulmartins%2Fhugo-digital-garden-theme)
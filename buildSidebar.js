const path = require('path')
const fs = require('fs-extra')
const globby = require('globby')
const yamlParser = require('js-yaml')
const sourcesPath = path.resolve(__dirname, 'sources')
const configFilePath = path.resolve(__dirname, 'sources/.vuepress/config.yml')

async function resolveComponents (sourceDir) {
  const componentDir = path.resolve(sourceDir, 'blog')
  if (!fs.existsSync(componentDir)) {
    return
  }
  return sort(await globby(['*.md','!README.md'], { cwd: componentDir })) || []
}

function genSidebarConfig(config ,components ) {
    if (!config) {
        return
    }
    if (!components) {
        return
    }

    let list = components.map(file => {
       return  file.replace('.md','')
    })

    if (config.themeConfig) {
        config.themeConfig.sidebar={
            "/blog/":list
        }

    }

    try {
        fs.writeFileSync(
            configFilePath,
            yamlParser.dump(config),
            'utf8'
        );
    } catch (e) {
        console.log(e);
    }
}

async function parseConfig (file) {
  const content = await fs.readFile(file, 'utf-8')

  const [extension] = /.\w+$/.exec(file)
  let data

  switch (extension) {
  case '.yml':
  case '.yaml':
        data = yamlParser.safeLoad(content)
    break

  case '.toml':
    data = tomlParser.parse(content)
    // reformat to match config since TOML does not allow different data type
    // https://github.com/toml-lang/toml#array
    const format = []
    Object.keys(data.head).forEach(meta => {
      data.head[meta].forEach(values => {
        format.push([meta, values])
      })
    })
    data.head = format
    break
  }
  return data || {}
}


function sort (arr) {
  return arr.sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
}

(async () => {
    const components = await resolveComponents(sourcesPath)
    let config = {}
    config = await parseConfig(configFilePath)
    genSidebarConfig(config , components)

})();
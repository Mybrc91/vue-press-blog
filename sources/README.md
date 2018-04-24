# Hello VuePress

<img :src="$withBase('/favicon.png')" alt="foo">

![da](/vue-press-blog/favicon.png)

::: tip
This is a tip
:::

 :dog:



| 表头   | 表头     | 表头    |
| :---:  |:---------|----:    |
| 居中   | 居左     | 居右    |
| 内撒容 | 居飒飒左 | 居阿萨右|

```java{4}
final public FragmentManager getChildFragmentManager() {
    if (mChildFragmentManager == null) {
        instantiateChildFragmentManager();
        if (mState >= RESUMED) {
            mChildFragmentManager.dispatchResume();
        } else if (mState >= STARTED) {
            mChildFragmentManager.dispatchStart();
        } else if (mState >= ACTIVITY_CREATED) {
            mChildFragmentManager.dispatchActivityCreated();
        } else if (mState >= CREATED) {
            mChildFragmentManager.dispatchCreate();
        }
    }
    return mChildFragmentManager;
}
```

{{1+1}}

<span v-for="i in 3">{{ i }} </span>

{{ $page }}

::: v-pre
`{{ This will be displayed as-is }}`
:::

{{ $site}}


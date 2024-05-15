package main

import (
	"fmt"
	"io"
	"os"
	"strings"
	"time"

	"github.com/tidwall/gjson"
)

func main() {
	f, _ := os.Open("/data/log.json")
	b, _ := io.ReadAll(f)
	j := gjson.ParseBytes(b)

	out := ""
	for _, e := range j.Array() {
		name := e.Get("name").String()
		published_at := e.Get("published_at").Time()
		html_url := e.Get("html_url").String()

		out += "\n"
		out += "\n"
		out += fmt.Sprintf("## %s (%s)\n", name, published_at.Format(time.DateOnly))
		out += "\n"
		out += "发布地址: " + html_url
		out += "\n"

		body := e.Get("body").String()

		i := strings.Index(body, "## 更新内容")
		if i != -1 {
			temp := body[i+len("## 更新内容"):]
			i = strings.Index(temp, "## ")
			if i != -1 {
				temp = temp[:i]
				out += temp
			}
		}

	}
	fmt.Println(out)
}

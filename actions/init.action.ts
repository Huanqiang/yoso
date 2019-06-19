import { NewCmd } from "../commands";
import { AbstractAction } from "./abstract.action";
import { Tplrc } from "./action.input";
import * as fs from "fs";
import * as nunjucks from "nunjucks";
import * as path from "path";
import { checkDirExist } from "../utils/utils";
var filePath = path.dirname(__dirname);//tpl-stencil根目录
var currentPath = process.cwd();//当前目录
var rootPath = path.dirname(currentPath);//当前工程父级目录

var data: any;

export class InitAction extends AbstractAction {

  public async handle(inputs: NewCmd) {

    if(fs.existsSync(inputs.path)){
      console.log("init")
      console.log(`项目路径${inputs.path}已经存在`)
      return
    }
    
  }
}
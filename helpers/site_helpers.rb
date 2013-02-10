module SiteHelpers

  def page_title
    title = "Bruno Le Hyaric"
    if data.page.title
      title << " | " + data.page.title
    end
    title
  end
  
  def page_description
    if data.page.description
      description = data.page.description
    else
      description = "Portfolio"
    end
    description
  end

end
